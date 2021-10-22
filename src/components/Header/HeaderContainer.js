import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserThunk} from "../../redux/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return (
            <Header name={this.props.name} isAuthorized={this.props.isAuthorized}/>
        );
    }
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    name: state.auth.name,
    isAuthorized: state.auth.isAuthorized,
})

export default connect(mapStateToProps, {getAuthUser: getAuthUserThunk})(HeaderContainer);