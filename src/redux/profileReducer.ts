import userAPI from "../api/api";
import {UserType} from "../types/types";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';


const initialState = {
    posts: [
        {id: 1, text: 'text post 1'},
        {id: 2, text: 'text post 2'},
    ],
    newPostText: '',
    profile: null as null | UserType,
}

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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

type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newPostText: string;
}

export const updateNewPostTextActionCreator = (newPostText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText,
});

type AddPostActionType = {
    type: typeof ADD_POST;
}

export const addPostActionCreator = (): AddPostActionType => ({
    type: ADD_POST,
});

type SetProfileActionType = {
    type: typeof SET_PROFILE;
    profile: UserType;
}

export const setProfile = (profile: UserType): SetProfileActionType => ({
    type: SET_PROFILE,
    profile
})

export const getUserThunk = (userId: string) => async (dispatch: any) => {
    const profile: any = await userAPI.getUserById(userId);
    dispatch(setProfile(profile));
};

export default profileReducer;
