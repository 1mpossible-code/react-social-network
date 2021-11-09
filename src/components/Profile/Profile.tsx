import React, {FC} from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {UserType} from "../../types/types";

type PropsType = {
    profile: UserType;
}

const Profile: FC<PropsType> = (props) => {
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