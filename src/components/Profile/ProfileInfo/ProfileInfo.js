const ProfileInfo = (props) => {
    return (
        <div>
            <div>Name: {props.profile.name}</div>
            <div>Username: {props.profile.username}</div>
            <div>Phone: {props.profile.phone}</div>
        </div>
    )
}

export default ProfileInfo;