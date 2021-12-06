import React, {ComponentType, FC} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootState} from "../redux/store";

type Props = {
    isAuthorized: boolean;
}

const withAuthRedirect = (Component: ComponentType) => {
    const AuthRedirect: FC<Props> = (props) => {
        if (!props.isAuthorized) return <Redirect to="/login"/>;
        return <Component {...props} />;
    }
    const mapStateToProps = (state: RootState) => ({
        isAuthorized: state.auth.isAuthorized,
    })
    return connect(mapStateToProps)(AuthRedirect);
}

export default withAuthRedirect;