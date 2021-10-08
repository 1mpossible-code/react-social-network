import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>Logo</span>
            </div>
        </header>
    )
}

export default Header;