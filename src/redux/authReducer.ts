import userAPI from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";

const SET_AUTH_USER = 'SET_AUTH_USER';

const initialState = {
    userId: null as null | string,
    name: null as null | string,
    email: null as null | string,
    isAuthorized: false,
    isFetching: true,
}

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

type ActionTypes = SetAuthUserActionType;

type UserDataType = {
    userId: string | null,
    name: string | null,
    email: string | null,
    isAuthorized: boolean,
}

type SetAuthUserActionType = {
    type: typeof SET_AUTH_USER,
    data: UserDataType,
}

export const setAuthUser = (userId: string | null, name: string | null, email: string | null, isAuthorized: boolean): SetAuthUserActionType => ({
    type: SET_AUTH_USER,
    data: {userId, name, email, isAuthorized},
})

export const getAuthUserThunk = (): ThunkAction<Promise<void>, RootState, unknown, ActionTypes> => async (dispatch) => {
    try {
        const {data} = await userAPI.getAuthMe();
        const {_id, name, email}: any = data;
        dispatch(setAuthUser(_id, name, email, true));
    } catch (e) {
        dispatch(setAuthUser(null, null, null, false));
    }
}

export default authReducer;