import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => ({
    onTextareaChange: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    },
    onBtnClick: () => {
        dispatch(addPostActionCreator())
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;