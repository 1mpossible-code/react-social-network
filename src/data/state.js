const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    text: this._state.profilePage.newPostText,
                };

                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber();
                break;
            case ADD_MESSAGE:
                const newMessage = {
                    id: this._state.dialogsPage.messages.length + 1,
                    text: this._state.dialogsPage.newMessageText,
                };

                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber();
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber();
                break;
            default:
                throw Error('Action type is invalid!');
        }
    },
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText,
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});

export const updateNewMessageTextActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText,
});

export default store;