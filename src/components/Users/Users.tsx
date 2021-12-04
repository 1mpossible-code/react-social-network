import React, {FC} from "react";
import classes from './Users.module.css';
import Preloader from "../Utils/Preloader";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type Props = {
    users: Array<UserType>;
    isEnd: boolean;
    isLoading: boolean;
    onFollowBtnClick: (userId: number) => void;
    loadMoreUsers: () => void;
}

const Users: FC<Props> = (props) => {
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
                    {/*<button*/}
                    {/*    className={classes.followBtn}*/}
                    {/*    onClick={() => {*/}
                    {/*        props.onFollowBtnClick(user.id)*/}
                    {/*    }}*/}
                    {/*>{user.follows ? 'Unfollow' : 'Follow'}</button>*/}
                </div>
            ))
        }

        {
            (props.isEnd) &&
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