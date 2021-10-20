import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    console.log(props.profile)
    return (
        <div>
            <h3>Profile</h3>
            <ProfileInfo {...props}/>
            <br/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;