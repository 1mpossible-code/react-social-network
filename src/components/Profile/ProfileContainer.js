import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import Preloader from "../Utils/Preloader";
import {withRouter} from "react-router-dom";
import {getUserById} from "../../api/api";

class ProfileContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        const {userId} = this.props.match.params;
        getUserById(userId).then(
            res => {
                this.props.setProfile(res.data);
            }
        )
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));