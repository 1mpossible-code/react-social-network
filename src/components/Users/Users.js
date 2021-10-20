import React from "react";
import classes from './Users.module.css';
import Preloader from "../Utils/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return <div>
        <h1>Users</h1>
        {
            props.users.map(user => (
                <div key={user.id} className={classes.userContainer}>
                    <NavLink to={`profile/${user.id}`}>
                        <div className={classes.container}>
                            <div>{user.name}</div>
                            <div className={classes.userDescription}>{user.company.catchPhrase}</div>
                        </div>
                    </NavLink>
                    <button
                        className={classes.followBtn}
                        onClick={() => {
                            props.onFollowBtnClick(user.id)
                        }}
                    >{user.follows ? 'Unfollow' : 'Follow'}</button>
                </div>
            ))
        }

        {
            ((props.currentPage * props.LIMIT) <= props.users.length) &&
            <div className={classes.loadBtnContainer}>
                <button className={classes.loadBtn} onClick={props.loadMoreUsers}>Load More
                </button>
            </div>
        }

        {
            props.isLoading && <Preloader/>
        }


    </div>
}

export default Users;