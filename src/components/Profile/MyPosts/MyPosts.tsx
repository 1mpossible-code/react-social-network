import React, {FC} from "react";
import Post from "./Post/Post";
import {PostType} from "../../../types/types";

type StateToPropsType = {
    posts: Array<PostType>;
    newPostText: string;
}

type DispatchToPropsType = {
    onTextareaChange: (text: string) => void;
    onBtnClick: () => void;
}

type PropsType = StateToPropsType & DispatchToPropsType;

const MyPosts: FC<PropsType> = (props) => {
    const onTextareaChange = (event: any) => {
        const text = event.target.value;
        props.onTextareaChange(text);
    }

    const onBtnClick = (event: any) => {
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