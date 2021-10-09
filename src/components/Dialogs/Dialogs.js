import React from "react";
import classes from "./Dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import Chat from "./Chat/Chat";

const Dialogs = () => {
    return (
        <div className={classes.dialogFrame}>
            <DialogsList/>
            <Chat/>
        </div>
    )
}

export default Dialogs;