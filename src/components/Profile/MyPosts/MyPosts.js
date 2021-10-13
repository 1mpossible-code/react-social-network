import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const textareaRef = React.createRef();

    const createNewPost = (event) => {
        event.preventDefault();
        props.addPost();
    };

    const changeNewPostText = () => {
        const text = textareaRef.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div>MyPosts</div>
            <form>
                <textarea
                    ref={textareaRef}
                    onChange={changeNewPostText}
                    value={props.newPostText}
                />
                <button onClick={createNewPost}>Submit!</button>
            </form>
            {props.posts.map(post => <Post message={post.text} id={post.id}/>)}
        </div>
    )
}

export default MyPosts;