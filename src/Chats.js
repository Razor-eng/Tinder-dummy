import React from 'react'
import Chat from './Chat'

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name="Sarah"
                message="Hey! how are you"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Love-Today-2022-Movie-Images-21c40f9.jpg/330px-Love-Today-2022-Movie-Images-21c40f9.jpg"
            />
        </div>
    )
}

export default Chats