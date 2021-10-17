const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

const initialState = {
    users: [
        {id: 1, follows: true, name: 'Lorem Ipsum 1', description: 'test description'},
        {id: 2, follows: false, name: 'Lorem Ipsum 2', description: 'test description'},
        {id: 3, follows: false, name: 'Lorem Ipsum 3', description: 'test description'},
        {id: 4, follows: true, name: 'Lorem Ipsum 4', description: 'test description'},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            const stateCopy = {
                ...state,
                users: [...state.users.map(user => {
                    if (user.id === action.userId) user.follows = !user.follows;
                    return user;
                })]
            }
            return stateCopy;
        default:
            return state;
    }
}

export const toggleFollowActionCreator = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
})

export default usersReducer;