import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        dialogsPage: {
            messages: [
                {id: 1, text: 'text1'},
                {id: 2, text: 'text2'},
                {id: 3, text: 'text3'},
                {id: 4, text: 'text4'},
                {id: 5, text: 'text5'},
            ],
            dialogs: [
                {id: 1, name: 'name1'},
                {id: 2, name: 'name2'},
                {id: 3, name: 'name3'},
                {id: 4, name: 'name4'},
                {id: 5, name: 'name5'},
            ],
            newMessageText: '',
        },
        profilePage: {
            posts: [
                {id: 1, text: 'text post 1'},
                {id: 2, text: 'text post 2'},],
            newPostText: '',
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    },
}

export default store;