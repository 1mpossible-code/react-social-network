const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    messages: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'},
        {id: 4, text: 'text4'},
        {id: 5, text: 'text5'},
    ],
    dialogs: [
        {id: 1, name: 'name1'},
        {id: 2, name: 'name2'},
        {id: 3, name: 'name3'},
        {id: 4, name: 'name4'},
        {id: 5, name: 'name5'},
    ],
    newMessageText: '',
}

type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                text: state.newMessageText,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        default:
            return state;
    }
}

type ActionTypes = AddMessageActionType | UpdateNewMessageTextActionType;

type AddMessageActionType = {
    type: typeof ADD_MESSAGE;
}

export const addMessageActionCreator = (): AddMessageActionType => ({
    type: ADD_MESSAGE,
});

type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: string;
}

export const updateNewMessageTextActionCreator = (newMessageText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText,
});

export default dialogsReducer;