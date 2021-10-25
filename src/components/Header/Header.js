import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>Logo</span>
            </div>
            <div className={classes.login}>
                {
                    props.isAuthorized ? props.name :
                        <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;