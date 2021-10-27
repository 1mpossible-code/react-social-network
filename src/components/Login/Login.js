import React from 'react';
import {getIsAuthorized} from "../../redux/selectors/authSelector";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

function Login(props) {
    if (props.isAuthorized) return <Redirect to="/profile"/>
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input type="text" name="email" id="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Enter your password"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthorized: getIsAuthorized(state),
})

export default connect(mapStateToProps)(Login);