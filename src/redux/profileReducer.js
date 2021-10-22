import userAPI from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
    posts: [
        {id: 1, text: 'text post 1'},
        {id: 2, text: 'text post 2'},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText,
});
export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})

export const getUserThunk = (userId) => (dispatch) => {
    userAPI.getUserById(userId).then(
        data => {
            dispatch(setProfile(data));
        }
    )
};

export default profileReducer;
