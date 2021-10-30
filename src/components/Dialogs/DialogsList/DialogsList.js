import React from "react";
import classes from "./DialogsList.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsList = (props) => {
    return (
        <div className={classes.dialogItems}>
            {props.dialogs.map(
                user => <DialogsItem key={user.id} name={user.name} id={user.id}/>
            )}
        </div>
    )
}

export default DialogsList;