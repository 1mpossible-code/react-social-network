import userAPI from "../api/api";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const ADD_USERS = 'ADD_USERS';
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    limit: 4,
    isLoading: false,
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                // users: [...state.users.map(user => {
                //     if (user.id === action.userId) user.follows = !user.follows;
                //     return user;
                // })]
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

type ActionTypes =
    ToggleFollowActionType
    | AddUsersActionType
    | IncrementCurrentPageActionType
    | SetIsLoadingActionType;

type ToggleFollowActionType = {
    type: typeof TOGGLE_FOLLOW;
    userId: number;
}

export const toggleFollowActionCreator = (userId: number): ToggleFollowActionType => ({
    type: TOGGLE_FOLLOW,
    userId
})

type AddUsersActionType = {
    type: typeof ADD_USERS;
    users: Array<UserType>
}

export const addUsersActionCreator = (users: Array<UserType>): AddUsersActionType => ({
    type: ADD_USERS,
    users
})

type IncrementCurrentPageActionType = {
    type: typeof INCREMENT_CURRENT_PAGE;
}

export const incrementCurrentPageActionCreator = (): IncrementCurrentPageActionType => ({
    type: INCREMENT_CURRENT_PAGE,
})

type SetIsLoadingActionType = {
    type: typeof SET_IS_LOADING;
    isLoading: boolean;
}

export const setIsLoadingActionCreator = (isLoading: boolean): SetIsLoadingActionType => ({
    type: SET_IS_LOADING,
    isLoading,
})

export const getUsersThunk = (page: number, limit: number): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
    dispatch(setIsLoadingActionCreator(true));
    const users: any = await userAPI.getUsers(page, limit);
    dispatch(addUsersActionCreator(users));
    dispatch(setIsLoadingActionCreator(false));
}

export default usersReducer;