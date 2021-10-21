import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";
import {getAuthMe} from "../../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        getAuthMe().then(
            ({_id, name, email}) => {
                this.props.setAuthUser(_id, name, email);
            }
        ).catch(e => console.error(e));
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

export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);