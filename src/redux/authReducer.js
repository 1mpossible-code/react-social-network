import userAPI from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

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
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export const setAuthUser = (userId, name, email) => ({
    type: SET_AUTH_USER,
    data: {userId, name, email},
})

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING,
    isFetching,
})

export const getAuthUserThunk = () => (dispatch) => {
    dispatch(setIsFetching(true));
    userAPI.getAuthMe().then(
        ({_id, name, email}) => {
            dispatch(setAuthUser(_id, name, email));
        })
        .catch(e => console.error(e))
        .finally(() => dispatch(setIsFetching(false)));
}

export default authReducer;