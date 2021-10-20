import {
    incrementCurrentPageActionCreator,
    addUsersActionCreator,
    toggleFollowActionCreator, setIsLoadingActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Component} from "react";
import axios from "axios";

class UsersContainer extends Component {
    LIMIT = 4;

    componentDidMount() {
        this.getUsersPage(1)
    }

    getUsersPage(page) {
        this.props.setIsLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${this.LIMIT}`).then(
            res => {
                this.props.setIsLoading(false);
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
            <Users
                users={this.props.users}
                onFollowBtnClick={this.props.onFollowBtnClick}
                currentPage={this.props.currentPage}
                loadMoreUsers={() => {
                    this.loadMoreUsers()
                }}
                LIMIT={this.LIMIT}
                isLoading={this.props.isLoading}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    onFollowBtnClick: (userId) => {
        dispatch(toggleFollowActionCreator(userId));
    },
    addUsers: (users) => {
        dispatch(addUsersActionCreator(users));
    },
    incrementCurrentPage: () => {
        dispatch(incrementCurrentPageActionCreator())
    },
    setIsLoading: (isLoading) => {
        dispatch(setIsLoadingActionCreator(isLoading))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);