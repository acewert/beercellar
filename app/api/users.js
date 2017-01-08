import {
    USER_ENDPOINTS
} from '../constants';

export const users = {
    login: () => {
        return fetch(USER_ENDPOINTS.SELF).then(response=>response.json())
    }
}