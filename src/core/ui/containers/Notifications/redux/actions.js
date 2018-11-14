import * as actionTypes from './actionTypes';

export function showNotification(payload) {
    return {
        type: actionTypes.SHOW_NOTIFICATION,
        payload,
    };
}

export function clearNotification() {
    return {
        type: actionTypes.CLEAR_NOTIFICATION,
    };
}
