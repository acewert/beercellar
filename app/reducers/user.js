import InitialState from './InitialState';

import { handleActions } from 'redux-actions';
import {
    RECEIVE_PROFILE
} from '../actions';


export const user = handleActions({
    [RECEIVE_PROFILE]: (state, action) => {
        return Object.assign({}, state, action.payload);
    }
}, InitialState.user);

export default user;
