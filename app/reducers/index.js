import { handleActions } from 'redux-actions';
import {
    HANDLE_LOGIN
} from '../actions';

import InitialState from './InitialState';

export const user = handleActions({
    [HANDLE_LOGIN]: (state, action) => {
        return Object.assign({}, state, action.payload);
    }
}, InitialState.user);

import RoutesReducer from './Routes';

export const Reducers = {
    RoutesReducer,
    user
};

export default Reducers;