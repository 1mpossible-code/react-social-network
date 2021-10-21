import {
    incrementCurrentPageActionCreator,
    addUsersActionCreator,
    toggleFollowActionCreator, setIsLoadingActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Component} from "react";
import {getUsers} from "../../api/api";

class UsersContainer extends Component {
    LIMIT = 4;

    componentDidMount() {
        this.getUsersPage(1)
    }

    getUsersPage(page) {
        this.props.setIsLoading(true);
        getUsers(page, this.LIMIT).then(
            data => {
                this.props.setIsLoading(false);
                this.props.addUsers(data);
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