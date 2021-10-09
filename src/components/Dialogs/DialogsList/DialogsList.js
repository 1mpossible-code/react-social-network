import React from "react";
import classes from "./DialogsList.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsList = () => {
    return (
        <div className={classes.dialogItems}>
            <DialogsItem name="Test"/>
        </div>
    )
}

export default DialogsList;