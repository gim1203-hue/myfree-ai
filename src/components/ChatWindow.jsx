import MessageBubble from './MessageBubble'

function ChatWindow({ messages, isLoading }) {
  return (
    <div className="chat-window">
      {messages.length === 0 && (
        <p className="chat-empty">Say something, or type a message below, to get started.</p>
      )}
      {messages.map((m, i) => (
        <MessageBubble key={i} role={m.role} content={m.content} />
      ))}
      {isLoading && <p className="chat-thinking">My AI is thinking…</p>}
    </div>
  )
}

export default ChatWindow
