import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            Profile
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;