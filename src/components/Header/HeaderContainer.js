import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.auth.name,
    isAuthorized: state.auth.isAuthorized,
})

export default connect(mapStateToProps)(HeaderContainer);