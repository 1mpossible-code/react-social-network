import {toggleFollowActionCreator} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
})

const mapDispatchToProps = (dispatch) => ({
    onFollowBtnClick: (userId) => {
        dispatch(toggleFollowActionCreator(userId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);