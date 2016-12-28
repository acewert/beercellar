import { handleActions } from 'redux-actions';
import {
    RECEIVE_PROFILE
} from '../actions';

import InitialState from './InitialState';

export const user = handleActions({
    [RECEIVE_PROFILE]: (state, action) => {
        return Object.assign({}, state, action.payload);
    }
}, InitialState.user);

import RoutesReducer from './Routes';

export const Reducers = {
    RoutesReducer,
    user
};

export default Reducers;