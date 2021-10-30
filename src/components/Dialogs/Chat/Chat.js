import React from "react";
import classes from "./Chat.css"
import Message from "./Message/Message";

const Chat = (props) => {
    const onTextareaChange = (event) => {
        const text = event.target.value;
        props.onTextareaChange(text);
    }

    const onBtnClick = (event) => {
        event.preventDefault()
        props.onBtnClick();
    }

    return (
        <div className={classes.dialogsChat}>
            <form>
                <textarea
                    onChange={onTextareaChange}
                    value={props.newMessageText}
                />
                <button onClick={onBtnClick}>Submit!</button>
            </form>
            {props.messages.map(
                message => <Message key={message.id} text={message.text} id={message.id}/>
            )}
        </div>
    )
}

export default Chat;