import ProfileCompanyCatchPhrase from "./ProfileCompanyCatchPhrase";

const ProfileInfo = (props) => {
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