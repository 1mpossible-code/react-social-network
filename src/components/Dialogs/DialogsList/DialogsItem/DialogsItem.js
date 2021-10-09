import React from "react";
import classes from "./DialogsItem.module.css"

const DialogsItem = (props) => {
    return (
        <div className={classes.dialogsItem + ' ' + classes.active}>
            {props.name}
        </div>
    )
}

export default DialogsItem;