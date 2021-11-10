import ProfileCompanyCatchPhrase from "./ProfileCompanyCatchPhrase";
import {UserType} from "../../../types/types";
import {FC} from "react";

type PropsType = {
    profile: UserType;
}

const ProfileInfo: FC<PropsType> = (props) => {
    return (
        <div>
            <div>Name: {props.profile.name}</div>
            <div>Username: {props.profile.username}</div>
            <div>Phone: {props.profile.phone}</div>
            <ProfileCompanyCatchPhrase value={props.profile.company.catchPhrase}/>
        </div>
    )
}

export default ProfileInfo;