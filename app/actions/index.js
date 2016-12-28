import {
    createActions
} from 'redux-actions';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const {
    receiveProfile
} = createActions(
    RECEIVE_PROFILE
);