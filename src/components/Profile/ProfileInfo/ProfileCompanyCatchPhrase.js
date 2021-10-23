import React, {Component} from 'react';

class ProfileCompanyCatchPhrase extends Component {
    state = {
        editMode: false,
    }

    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleFocus = (event) => {
        event.target.select();
    }

    render() {
        return (
            <div>
                Company catch phrase:
                {
                    !this.state.editMode ?
                        <span onDoubleClick={this.toggleEditMode}>{this.props.value}</span>
                        :
                        <span><input
                            autoFocus={true}
                            onSelect={this.handleFocus}
                            onBlur={this.toggleEditMode}
                            type="text"
                            value={this.props.value}
                        /></span>
                }
            </div>
        );
    }
}

export default ProfileCompanyCatchPhrase;