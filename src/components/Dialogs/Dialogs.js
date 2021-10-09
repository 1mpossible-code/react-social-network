import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={classes.dialogFrame}>
            <div className={classes.dialogItems}>
                <div className={classes.item + ' ' + classes.active}>Name</div>
                <div className={classes.item}>Name2</div>
            </div>
            <div className={classes.chat}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message + ' ' + classes.right}>Yo</div>
                <div className={classes.message}>Test message</div>
                <div className={classes.message}>Lorem ipsum dolor sit.</div>
            </div>
        </div>
    )
}

export default Dialogs;