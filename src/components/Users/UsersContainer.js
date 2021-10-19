import {
    incrementCurrentPageActionCreator,
    addUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);