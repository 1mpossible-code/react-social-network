const SET_AUTH_USER = 'SET_AUTH_USER';

const initialState = {
    userId: null,
    name: null,
    email: null,
    isAuthorized: false,
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

export default authReducer;