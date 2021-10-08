import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>Avatar</div>
            <div className={classes.content}>{props.message}</div>
        </div>
    )
}

export default Post;