import { useState, useCallback } from 'react'
import './App.css'
import ChatWindow from './components/ChatWindow'
import VoiceButton from './components/VoiceButton'
import { useSpeechRecognition } from './hooks/useSpeechRecognition'
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const { speak, stopSpeaking } = useSpeechSynthesis()

  const sendMessage = useCallback(
    async (text, { speakReply = false } = {}) => {
      const trimmed = text.trim()
      if (!trimmed) return

      setErrorMessage(null)
      const nextMessages = [...messages, { role: 'user', content: trimmed }]
      setMessages(nextMessages)
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: nextMessages }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Something went wrong talking to the AI.')
        }

        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])

        if (speakReply) {
          speak(data.reply)
        }
      } catch (err) {
        setErrorMessage(err.message)
      } finally {
        setIsLoading(false)
      }
    },
    [messages, speak]
  )

  const { isListening, isSupported, startListening, stopListening } = useSpeechRecognition({
    onResult: (transcript) => sendMessage(transcript, { speakReply: true }),
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>My AI</h1>
        <p>Your free personal assistant — voice powered by your browser, brains powered by Gemini.</p>
      </header>

      <main className="app-main">
        <ChatWindow messages={messages} isLoading={isLoading} />

        {errorMessage && <p className="chat-error">{errorMessage}</p>}

        <form className="chat-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit" disabled={isLoading}>Send</button>
        </form>

        <div className="voice-controls">
          <VoiceButton
            isListening={isListening}
            isSupported={isSupported}
            onStart={startListening}
            onStop={stopListening}
          />
          <button type="button" className="stop-speaking" onClick={stopSpeaking}>
            Stop speaking
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
