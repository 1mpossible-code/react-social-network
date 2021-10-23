import {
    getUsersThunk, incrementCurrentPageActionCreator, toggleFollowActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Component} from "react";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
                {...this.props}
                loadMoreUsers={() => {
                    this.loadMoreUsers()
                }}
                LIMIT={this.LIMIT}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
})


export default compose(
    connect(mapStateToProps, {
        getUsers: getUsersThunk,
        incrementCurrentPage: incrementCurrentPageActionCreator,
        onFollowBtnClick: toggleFollowActionCreator,
    }),
    withAuthRedirect,
)(UsersContainer);