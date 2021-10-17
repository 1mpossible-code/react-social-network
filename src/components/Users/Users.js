import React from "react";
import classes from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            <h1>Users</h1>
            {
                props.users.map(user => (
                    <div key={user.id} className={classes.userContainer}>
                        <div className={classes.container}>
                            <div>{user.name}</div>
                            <div className={classes.userDescription}>{user.description}</div>
                        </div>
                        <button
                            className={classes.followBtn}
                            onClick={() => {
                                props.onFollowBtnClick(user.id)
                            }}
                        >{user.follows ? 'Follow' : 'Unfollow'}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;