import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";
import axios from "axios";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get('http://localhost:3001/auth/me', {withCredentials: true})
            .then(
                res => {
                    const {_id, name, email} = res.data

                    this.props.setAuthUser(_id, name, email);
                }
            ).catch(e => console.log(e));
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