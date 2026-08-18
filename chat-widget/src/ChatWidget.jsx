import { useState } from 'react'
import './ChatWidget.css'

function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me about our products.' },
  ])
  const [inputValue, setInputValue] = useState('')

  const sendMessage = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
    setInputValue('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="chat-widget">
      <div className="chat-widget-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-widget-message chat-widget-message--${message.role}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-widget-input-row">
        <input
          type="text"
          className="chat-widget-input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about our products..."
        />
        <button
          type="button"
          className="chat-widget-send"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatWidget
