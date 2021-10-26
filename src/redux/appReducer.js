import {getAuthUserThunk} from "./authReducer";

const INITIALIZE = 'INITIALIZE';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

const initializationSuccess = () => ({
    type: INITIALIZE,
})

export const initialize = () => (dispatch) => {
    const promise = dispatch(getAuthUserThunk());
    promise.then(() => dispatch(initializationSuccess()))
}

export default appReducer;