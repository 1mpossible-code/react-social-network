import userAPI from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';

const initialState = {
    userId: null,
    name: null,
    email: null,
    isAuthorized: false,
    isFetching: true,
}

const authReducer = (state = initialState, action) => {
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

export const setAuthUser = (userId, name, email) => ({
    type: SET_AUTH_USER,
    data: {userId, name, email},
})

export const getAuthUserThunk = () => (dispatch) => {
    return userAPI.getAuthMe().then(
        ({_id, name, email}) => {
            dispatch(setAuthUser(_id, name, email));
        }).catch(e => console.error(e))
}

export default authReducer;