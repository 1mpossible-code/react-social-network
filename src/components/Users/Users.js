import React, {Component} from "react";
import classes from './Users.module.css';
import axios from "axios";

class Users extends Component {
    LIMIT = 5;

    componentDidMount() {
        this.getUsersPage(1)
    }

    getUsersPage(page) {
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${this.LIMIT}`).then(
            res => {
                this.props.addUsers(res.data);
            }
        )
    }

    loadMoreUsers() {
        this.props.incrementCurrentPage();
        this.getUsersPage(this.props.currentPage + 1);
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

                {
                    ((this.props.currentPage * this.LIMIT) <= this.props.users.length) &&
                    <div className={classes.loadBtnContainer}>
                        <button className={classes.loadBtn} onClick={() => {
                            this.loadMoreUsers()
                        }}>Load More
                        </button>
                    </div>
                }

                {
                    ((this.props.currentPage * this.LIMIT) === this.props.users.length + this.LIMIT) &&
                    <div className={classes.loadBtnContainer}>
                        <span>that's all</span>
                    </div>
                }

            </div>
        );
    }
}

export default Users;