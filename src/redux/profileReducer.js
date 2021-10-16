const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        {id: 1, text: 'text post 1'},
        {id: 2, text: 'text post 2'},],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    const stateCopy = Object.create(state)
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
            };

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newPostText;
            break;
        default:
            break;
    }

    return stateCopy;
}

export const updateNewPostTextActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText,
});
export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export default profileReducer;
