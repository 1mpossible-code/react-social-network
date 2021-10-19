import React, {Component} from "react";
import classes from './Users.module.css';
import axios from "axios";

class Users extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                this.props.setUsers(res.data);
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {
                    this.props.users.map(user => (
                        <div key={user.id} className={classes.userContainer}>
                            <div className={classes.container}>
                                <div>{user.name}</div>
                                <div className={classes.userDescription}>{user.description}</div>
                            </div>
                            <button
                                className={classes.followBtn}
                                onClick={() => {
                                    this.props.onFollowBtnClick(user.id)
                                }}
                            >{user.follows ? 'Unfollow' : 'Follow'}</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Users;