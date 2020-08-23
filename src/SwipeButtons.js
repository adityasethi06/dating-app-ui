import React from 'react';
import './SwipeButtons.css';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

export const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_replay">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_close">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarIcon fontSize="large"/>   
            </IconButton>
            <IconButton className="swipeButtons_fav">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_flash">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}
