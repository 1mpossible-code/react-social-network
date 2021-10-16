import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>MyPosts</div>
            <form>
                <textarea
                    onChange={props.onTextareaChange}
                    value={props.newPostText}
                />
                <button onClick={props.onBtnClick}>Submit!</button>
            </form>
            {props.posts.map(post => <Post message={post.text} id={post.id}/>)}
        </div>
    )
}

export default MyPosts;