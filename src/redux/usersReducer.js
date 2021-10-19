const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const ADD_USERS = 'ADD_USERS';
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE';

const initialState = {
    users: [],
    currentPage: 1,
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

export default usersReducer;