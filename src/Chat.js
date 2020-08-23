import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";
import { withRouter } from 'react-router-dom';

const Chat = ({name, msg, profilePic, timestamp, match, history }) => {
    console.log(match);
    return (
        <div className="chat" onClick={() => history.push(`${match.url}/${name}`)}>
            <Avatar className="chat_img" alt={name} src={profilePic}>{name}</Avatar>
            <div className="chat_details">
                <h3>{name}</h3>
                <p>{msg}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
        </div>
    )
}

export default withRouter(Chat);
