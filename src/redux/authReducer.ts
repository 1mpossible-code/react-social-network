import userAPI from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';

const initialState = {
    userId: null as null | string,
    name: null as null | string,
    email: null as null | string,
    isAuthorized: false,
    isFetching: true,
}

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuthorized: true,
            }
        default:
            return state;
    }
}

type UserDataType = {
    userId: string | null,
    name: string | null,
    email: string | null,
}

type SetAuthUserActionType = {
    type: typeof SET_AUTH_USER,
    data: UserDataType,
}

export const setAuthUser = (userId: string | null, name: string | null, email: string | null): SetAuthUserActionType => ({
    type: SET_AUTH_USER,
    data: {userId, name, email},
})

export const getAuthUserThunk = () => async (dispatch: any) => {
    const {_id, name, email}: any = await userAPI.getAuthMe();
    dispatch(setAuthUser(_id, name, email));
}

export default authReducer;