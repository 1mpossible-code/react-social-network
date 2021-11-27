import React, {FC} from "react";
import classes from "./Chat.module.css"
import Message from "./Message/Message";
import {MessageType} from "../../../types/types";

type StateToProps = {
    messages: Array<MessageType>;
    newMessageText: string;
}

type DispatchToProps = {
    onTextareaChange: (text: string) => void;
    onBtnClick: () => void;
}

type Props = StateToProps & DispatchToProps;

const Chat: FC<Props> = (props) => {
    const onTextareaChange = (event: any) => {
        const text = event.target.value;
        props.onTextareaChange(text);
    }

    const onBtnClick = (event: any) => {
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