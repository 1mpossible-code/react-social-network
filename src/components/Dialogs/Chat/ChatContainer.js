import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsReducer";
import Chat from "./Chat";
import StoreContext from "../../../StoreContext";

const ChatContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage;

                const sendNewMessage = (event) => {
                    event.preventDefault();
                    const action = addMessageActionCreator();
                    store.dispatch(action)
                }

                const changeNewMessageText = (event) => {
                    const text = event.target.value
                    const action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                }

                return <Chat
                    onTextareaChange={changeNewMessageText}
                    onBtnClick={sendNewMessage}
                    newMessageText={state.newMessageText}
                    messages={state.messages}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default ChatContainer;