import React from "react";
import classes from "./Dialogs.module.css"
import ChatContainer from "./Chat/ChatContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogFrame}>
            <DialogsListContainer store={props.store}/>
            <ChatContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;