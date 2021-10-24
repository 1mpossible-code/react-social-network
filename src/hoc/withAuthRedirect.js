import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Preloader from "../components/Utils/Preloader";

const withAuthRedirect = (Component) => {
    const AuthRedirect = (props) => {
        if (props.isFetching) return <Preloader/>;
        else if (!props.isAuthorized) return <Redirect to="/login"/>;
        return <Component {...props} />;
    }
    const mapStateToProps = (state) => ({
        isAuthorized: state.auth.isAuthorized,
        isFetching: state.auth.isFetching,
    })
    return connect(mapStateToProps)(AuthRedirect);
}

export default withAuthRedirect;