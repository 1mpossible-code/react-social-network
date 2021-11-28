import React, {FC} from "react";
import classes from "./Post.module.css";

type Props = {
    message: string;
}

const Post: FC<Props> = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>Avatar</div>
            <div className={classes.content}>{props.message}</div>
        </div>
    )
}

export default Post;