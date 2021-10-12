import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const textareaRef = React.createRef();

    const createNewPost = (event) => {
        event.preventDefault();

        const text = textareaRef.current.value;
        props.addPost(text);
    };

    return (
        <div>
            <div>MyPosts</div>
            <form>
                <textarea ref={textareaRef}/>
                <button onClick={createNewPost}>Submit!</button>
            </form>
            {props.posts.map(post => <Post message={post.text} id={post.id}/>)}
        </div>
    )
}

export default MyPosts;