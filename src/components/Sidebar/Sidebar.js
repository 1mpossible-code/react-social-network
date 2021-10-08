import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside>
            <nav className={classes.navbar}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
        </aside>
    )
}

export default Sidebar;