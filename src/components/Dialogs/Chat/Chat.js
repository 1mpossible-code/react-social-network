import React from "react";
import classes from "./Chat.css"
import Message from "./Message/Message";

const Chat = (props) => {
    return (
        <div className={classes.dialogsChat}>
            {props.messages.map(
                message => <Message text={message.text} id={message.id}/>
            )}
        </div>
    )
}

export default Chat;