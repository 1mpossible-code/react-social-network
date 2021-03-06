import React, {FC} from "react";
import classes from "./DialogsList.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import {DialogType, UserType} from "../../../types/types";

type Props = {
    dialogs: Array<DialogType>
    user: UserType;
}

const DialogsList: FC<Props> = (props) => {
    return (
        <div className={classes.dialogItems}>
            {props.dialogs.map(
                user => <DialogsItem key={user.id} name={user.name} id={user.id}/>
            )}
        </div>
    )
}

export default DialogsList;