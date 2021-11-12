import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {compose} from "redux";

const mapStateToProps = (state: RootState) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
})

export default compose(
    connect(mapStateToProps,
        {
            onTextareaChange: updateNewPostTextActionCreator,
            onBtnClick: addPostActionCreator
        }),
)(MyPosts);