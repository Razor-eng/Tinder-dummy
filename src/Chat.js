import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Chat = ({ name, message, profilePic, timestamp }) => {
    return (
        <Link to={`/CHAT/${name}`}>
            <div className='chat'>
                <Avatar className='chat_profile' src={profilePic} />
                <div className='chat_details'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className='chat_timestamp'>{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat