import {
    getUsersThunk, incrementCurrentPageActionCreator, toggleFollowActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Component} from "react";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends Component {
    LIMIT = 4;

    componentDidMount() {
        this.props.getUsers(this.props.currentPage)
    }

    loadMoreUsers() {
        this.props.incrementCurrentPage();
        this.props.getUsers(this.props.currentPage + 1)
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
    isAuthorized: state.auth.isAuthorized,
})


export default connect(mapStateToProps, {
    getUsers: getUsersThunk,
    incrementCurrentPage: incrementCurrentPageActionCreator,
    onFollowBtnClick: toggleFollowActionCreator,
})(withAuthRedirect(UsersContainer));