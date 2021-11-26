import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsReducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";

const mapStateToProps = (state: RootState) => ({
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
})

const ChatContainer = connect(mapStateToProps, {
    onTextareaChange: updateNewMessageTextActionCreator,
    onBtnClick: addMessageActionCreator
})(Chat);

export default ChatContainer;