import React, {useState} from 'react';


const ProfileCompanyCatchPhrase = (props) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleFocus = (event) => {
        event.target.select();
    }

    return (
        <div>
            Company catch phrase:
            {
                !editMode ?
                    <span onDoubleClick={toggleEditMode}>{props.value}</span>
                    :
                    <span><input
                        autoFocus={true}
                        onSelect={handleFocus}
                        onBlur={toggleEditMode}
                        type="text"
                        value={props.value}
                    /></span>
            }
        </div>
    );
}

export default ProfileCompanyCatchPhrase;