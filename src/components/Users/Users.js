import React from "react";
import classes from './Users.module.css';
import axios from "axios";

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                props.setUsers(res.data);
                console.log(res.data)
            }
        )
    }

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
                        >{user.follows ? 'Unfollow' : 'Follow'}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;