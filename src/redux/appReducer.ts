import {getAuthUserThunk} from "./authReducer";

const INITIALIZE = 'INITIALIZE';

const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializationSuccessActionType = {
    type: typeof INITIALIZE,
}

const initializationSuccess = (): InitializationSuccessActionType => ({
    type: INITIALIZE,
})

export const initialize = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserThunk());
    promise.then(() => dispatch(initializationSuccess()))
}

export default appReducer;