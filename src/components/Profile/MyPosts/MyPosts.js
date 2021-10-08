import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>MyPosts</div>
            <Post message='Hey!'/>
            <Post message='It is my first post'/>
        </div>
    )
}

export default MyPosts;