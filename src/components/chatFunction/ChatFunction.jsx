import React, { useState } from 'react';
import "./_chatFunction.scss";

const ChatFunction = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    };

    // Simulate online/offline status (replace with real logic as needed)
    const [isOnline, setIsOnline] = useState(true);

    // Example: toggle online status for demonstration (remove in production)
    setTimeout(() => setIsOnline(!isOnline), 10000);

    return (
        <div className="chat-wrapper">
            {isOpen && (
                <div className="chat-popup">
                    <div className="chat-header">
                        <div className='chat-avatar'>
                        </div>
                        <div>
                        <p className="chat-title">Chatting with</p>
                        <p className="chat-name">{isOnline ? "John Rick" : "Offline"}</p> 
                        <div>
                            <span
                                className="status-dot"
                                style={{
                                    backgroundColor: isOnline ? 'green' : 'red'
                                }}
                            ></span>
                        </div>
                        </div>
                        <button onClick={toggleChat} className="close-btn">×</button>
                    </div>
                    <div className="chat-content">
                        <div className="messages">
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender}`}>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className="chat-input-form">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="chat-input"
                            />
                            <button type="submit" className="send-button">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <button 
                className="chat-icon"
                onClick={toggleChat}
                aria-label="Toggle chat"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    width="24" 
                    height="24"
                >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
            </button>
        </div>
    );
};

export default ChatFunction;