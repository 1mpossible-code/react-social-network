import React from "react";
import classes from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogFrame}>
            <DialogsList dialogs={props.data.dialogs}/>
            <Chat messages={props.data.messages}/>
        </div>
    )
}

export default Dialogs;