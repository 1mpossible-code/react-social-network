import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const withAuthRedirect = (Component) => {
    const AuthRedirect = (props) => {
        if (!props.isAuthorized) return <Redirect to="/login"/>;
        return <Component/>;
    }
    const mapStateToProps = (state) => ({
        isAuthorized: state.isAuthorized,
    })
    return connect(mapStateToProps)(AuthRedirect);
}

export default withAuthRedirect;