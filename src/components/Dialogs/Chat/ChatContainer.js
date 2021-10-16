import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsReducer";
import Chat from "./Chat";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
    onTextareaChange: (text) => {
        dispatch(updateNewMessageTextActionCreator(text))
    },
    onBtnClick: () => {
        dispatch(addMessageActionCreator())
    },
})

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;