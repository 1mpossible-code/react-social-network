import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            Profile
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;