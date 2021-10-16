import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({store}) => {
    const state = store.getState().profilePage;

    const createNewPost = (event) => {
        event.preventDefault();
        const action = addPostActionCreator();
        store.dispatch(action);
    };

    const changeNewPostText = (event) => {
        const text = event.target.value;
        const action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
    };

    return (
            <MyPosts
                onTextareaChange={changeNewPostText}
                onBtnClick={createNewPost}
                newPostText={state.newPostText}
                posts={state.posts}
            />
    )
}

export default MyPostsContainer;