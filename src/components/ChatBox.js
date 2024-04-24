import React, { useState } from 'react';

function ChatBox() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleChat = async () => {
        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            });

            const data = await response.json();
            setAnswer(data.answer);
        } catch (error) {
            console.error('Error chatting:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter your question"
            />
            <button onClick={handleChat}>Chat</button>
            {answer && <p>{answer}</p>}
        </div>
    );
}

export default ChatBox;