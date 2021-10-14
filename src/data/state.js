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
            ]
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
    addPost() {
        const postsLink = this._state.profilePage.posts;
        const newPostTextLink = this._state.profilePage.newPostText;

        const newPost = {
            id: postsLink.length + 1,
            text: newPostTextLink,
        };

        postsLink.push(newPost);

        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state, this.addPost);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;