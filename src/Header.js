import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import {Link, withRouter} from 'react-router-dom';
import "./Header.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = (props) => {
    console.log(props);
    return (
        <div className="header">
            {props.backButton ? (
                <IconButton onClick={() => props.history.replace(props.backButton)}>
                    <ArrowBackIosIcon className="header_icon" fontSize="large" />
                </IconButton>
            
            ):
            (<IconButton>
                <PersonIcon className="header_icon" fontSize="large"/>
            </IconButton>)}
            <Link to="/">
                <img 
                    className="header_logo "
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="logo"/>
            </Link>
            
            <Link to="/chat">
                <IconButton>
                    <ChatIcon className="header_icon" fontSize="large"/>
                </IconButton>
            </Link>
            
        </div>
    )
}

export default withRouter(Header);
