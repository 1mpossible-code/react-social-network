import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../data/profileReducer";

const MyPosts = (props) => {
    const textareaRef = React.createRef();

    const createNewPost = (event) => {
        event.preventDefault();
        const action = addPostActionCreator();
        props.dispatch(action);
    };

    const changeNewPostText = () => {
        const text = textareaRef.current.value;
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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