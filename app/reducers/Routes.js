import { ActionConst } from 'react-native-router-flux';

import InitialState from './InitialState';

export default function RoutesReducer(state = InitialState, action = {}) {
    switch (action.type) {
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene
            };
        default:
            return state;
    }
};