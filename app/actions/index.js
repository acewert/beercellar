import {
    createActions
} from 'redux-actions';

export const HANDLE_LOGIN = 'HANDLE_LOGIN';

export const {
    handleLogin
} = createActions(
    HANDLE_LOGIN
);