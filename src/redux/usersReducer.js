import userAPI from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const ADD_USERS = 'ADD_USERS';
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    users: [],
    currentPage: 1,
    limit: 4,
    isLoading: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if (user.id === action.userId) user.follows = !user.follows;
                    return user;
                })]
            };
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        case INCREMENT_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default:
            return state;
    }
}

export const toggleFollowActionCreator = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
})

export const addUsersActionCreator = (users) => ({
    type: ADD_USERS,
    users
})

export const incrementCurrentPageActionCreator = () => ({
    type: INCREMENT_CURRENT_PAGE,
})

export const setIsLoadingActionCreator = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading,
})

export const getUsersThunk = (page, limit) => (dispatch) => {
    dispatch(setIsLoadingActionCreator(true));
    userAPI.getUsers(page, limit).then(
        data => {
            dispatch(addUsersActionCreator(data));
            dispatch(setIsLoadingActionCreator(false));
        }
    );
}

export default usersReducer;