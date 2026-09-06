function MessageBubble({ role, content }) {
  return (
    <div className={`message-bubble ${role}`}>
      <span className="message-role">{role === 'user' ? 'You' : 'My AI'}</span>
      <p>{content}</p>
    </div>
  )
}

export default MessageBubble
