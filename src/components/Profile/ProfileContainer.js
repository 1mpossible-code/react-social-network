import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserThunk} from "../../redux/profileReducer";
import Preloader from "../Utils/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        const {userId} = this.props.match.params;
        this.props.getUser(userId);
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

export default connect(mapStateToProps, {getUser: getUserThunk})(withRouter(ProfileContainer));