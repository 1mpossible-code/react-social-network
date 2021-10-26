import {
    getUsersThunk, incrementCurrentPageActionCreator, toggleFollowActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Component} from "react";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getIsEnd, getIsLoading, getLimit, getUsers} from "../../redux/selectors/userSlectors";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.limit);
    }

    loadMoreUsers() {
        this.props.incrementCurrentPage();
        this.props.getUsers(this.props.currentPage + 1, this.props.limit);
    }

    render() {
        return (
            <Users
                {...this.props}
                loadMoreUsers={() => {
                    this.loadMoreUsers()
                }}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    limit: getLimit(state),
    isLoading: getIsLoading(state),
    isEnd: getIsEnd(state),
})


export default compose(
    connect(mapStateToProps, {
        getUsers: getUsersThunk,
        incrementCurrentPage: incrementCurrentPageActionCreator,
        onFollowBtnClick: toggleFollowActionCreator,
    }),
    withAuthRedirect,
)(UsersContainer);