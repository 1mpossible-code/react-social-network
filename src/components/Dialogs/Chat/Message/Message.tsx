import React, {FC} from "react";
import classes from "./Message.module.css"

type Props = {
    text: string;
}

const Chat: FC<Props> = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

export default Chat;