import React from "react";
import classes from './Users.module.css';
import loading from '../../assets/loading.gif';

const Users = (props) => {
    return <div>
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

        {
            ((props.currentPage * props.LIMIT) <= props.users.length) &&
            <div className={classes.loadBtnContainer}>
                <button className={classes.loadBtn} onClick={props.loadMoreUsers}>Load More
                </button>
            </div>
        }

        {
            props.isLoading &&
            <div className={classes.loading}>
                <img src={loading} alt='loading'/>
            </div>
        }


    </div>
}

export default Users;