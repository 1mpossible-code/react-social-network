import React from "react";
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <nav className={classes.navbar}>
                <div>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;