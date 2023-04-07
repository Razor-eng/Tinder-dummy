import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'

const ChatScreen = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Love-Today-2022-Movie-Images-21c40f9.jpg/330px-Love-Today-2022-Movie-Images-21c40f9.jpg',
            message: 'whats up'
        },
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Love-Today-2022-Movie-Images-21c40f9.jpg/330px-Love-Today-2022-Movie-Images-21c40f9.jpg',
            message: 'Hey love'
        },
        {
            message: 'Hi! how are you?'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>you matched with Elen on 10/09/2022</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className='chatScreen_image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            ))}
            <div >
                <form className='chatScreen_input'>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" className='chatScreen_inputField' placeholder='Type a message...' />
                    <button onClick={handleSend} className='chatScreen_button'>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen