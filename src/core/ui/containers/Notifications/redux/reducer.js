import * as actionTypes from './actionTypes';

export const initialState = {
    type: 'info',
    message: '',
    timeout: 4500,
};

export function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_NOTIFICATION:
            return {
                ...state,
                ...action.payload,
            };
        case actionTypes.CLEAR_NOTIFICATION:
            return initialState;
        default:
            return state;
    }
}
