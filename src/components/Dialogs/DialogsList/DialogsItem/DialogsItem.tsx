import React, {FC} from "react";
import classes from "./DialogsItem.module.css"

type Props = {
    id: number;
    name: string;
}

const DialogsItem: FC<Props> = (props) => {
    return (
        <div className={classes.dialogsItem + ' ' + classes.active}>
            {props.name}
        </div>
    )
}

export default DialogsItem;