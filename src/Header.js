import { IconButton } from '@material-ui/core'
import { ArrowBackIos, Forum, Person } from '@material-ui/icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ backButton }) => {
    const navigate = useNavigate();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                    <ArrowBackIos fontSize='large' className='header_icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <Person fontSize='large' className='header_icon' />
                </IconButton>
            )}
            <Link to="/">
                <img className='header_logo' src="/logo.png" alt="Tinder Logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <Forum fontSize='large' className='header_icon' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header