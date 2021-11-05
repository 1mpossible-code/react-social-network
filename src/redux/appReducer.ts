import {getAuthUserThunk} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";

const INITIALIZE = 'INITIALIZE';

const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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

type ActionTypes = InitializationSuccessActionType;

type InitializationSuccessActionType = {
    type: typeof INITIALIZE,
}

const initializationSuccess = (): InitializationSuccessActionType => ({
    type: INITIALIZE,
})

export const initialize = (): ThunkAction<void, RootState, unknown, ActionTypes> => (dispatch) => {
    const promise = dispatch(getAuthUserThunk());
    promise.then(() => dispatch(initializationSuccess()))
}

export default appReducer;