import React from "react";
import classes from "./Dialogs.module.css"
import ChatContainer from "./Chat/ChatContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogFrame}>
            <DialogsListContainer/>
            <ChatContainer/>
        </div>
    )
}

export default withAuthRedirect(Dialogs);