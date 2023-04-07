import { IconButton } from '@material-ui/core'
import { Close, Favorite, FlashOn, Replay, StarRate } from '@material-ui/icons'
import React from 'react'

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='repeat'>
                <Replay fontSize='large' />
            </IconButton>
            <IconButton className='left'>
                <Close fontSize='large' />
            </IconButton>
            <IconButton className='star'>
                <StarRate fontSize='large' />
            </IconButton>
            <IconButton className='right'>
                <Favorite fontSize='large' />
            </IconButton>
            <IconButton className='lightning'>
                <FlashOn fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons