import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>Logo</span>
            </div>
            <div className={classes.login}>
                {
                    props.isAuthorized ? props.name :
                        <a href="http://localhost:3001/login">Login</a>
                }
            </div>
        </header>
    )
}

export default Header;