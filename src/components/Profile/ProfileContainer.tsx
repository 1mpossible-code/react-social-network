import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserThunk} from "../../redux/profileReducer";
import Preloader from "../Utils/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {UserType} from "../../types/types";
import {RootState} from "../../redux/store";

type MapStatePropsType = {
    profile: UserType;
    match: any;
}

type MapDispatchPropsType = {
    getUser: (userId: number) => void;
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends Component<PropsType> {
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

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUser: getUserThunk}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);