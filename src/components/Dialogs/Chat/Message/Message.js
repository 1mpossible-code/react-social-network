import React from "react";
import classes from "./Message.css"

const Chat = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

export default Chat;