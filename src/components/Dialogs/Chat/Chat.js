import React from "react";
import classes from "./Chat.css"
import Message from "./Message/Message";

const Chat = () => {
    return (
        <div className={classes.dialogsChat}>
            <Message text="Hi!"/>
        </div>
    )
}

export default Chat;