import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import Preloader from "../Utils/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        const {userId} = this.props.match.params;
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
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