import React from "react";
import classes from "./Chat.css"
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../data/dialogsReducer";

const Chat = (props) => {
    const onButtonCLick = (event) => {
        event.preventDefault();
        const action = addMessageActionCreator();
        props.dispatch(action)
    }

    const onTextareaChange = (event) => {
        const text = event.target.value
        const action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogsChat}>
            <form>
                <textarea
                    onChange={onTextareaChange}
                    value={props.newMessageText}
                />
                <button onClick={onButtonCLick}>Submit!</button>
            </form>
            {props.messages.map(
                message => <Message text={message.text} id={message.id}/>
            )}
        </div>
    )
}

export default Chat;