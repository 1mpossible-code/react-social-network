import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import Preloader from "../Utils/Preloader";

class ProfileContainer extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/1').then(
            res => {
                this.props.setProfile(res.data);
            }
        )
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setProfile})(ProfileContainer);