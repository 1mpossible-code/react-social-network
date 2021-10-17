import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const onTextareaChange = (event) => {
        const text = event.target.value;
        props.onTextareaChange(text);
    }

    const onBtnClick = (event) => {
        event.preventDefault();
        props.onBtnClick();
    }

    return (
        <div>
            <div>MyPosts</div>
            <form>
                <textarea
                    onChange={onTextareaChange}
                    value={props.newPostText}
                />
                <button onClick={onBtnClick}>Submit!</button>
            </form>
            {props.posts.map(post => <Post message={post.text} key={post.id}/>)}
        </div>
    )
}

export default MyPosts;