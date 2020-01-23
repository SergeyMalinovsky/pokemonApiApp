import {
    USER_ADDS_TO_FAVORITES_REQUEST,
    USER_ADDS_TO_FAVORITES_SUCCESS,
    USER_ADDS_TO_FAVORITES_FAILED,
} from '../types/userActions';

import {
    USER_AUTHORIZATION_SUCCESS,
    USER_AUTHORIZATION_FAILED,
    USER_AUTHORIZATION_REQUEST,

    USER_STATUS_AUTHORIZATED,
    USER_STATUS_NON_AUTHORIZATED,
} from '../types/userState';


const initialState = {
    userState: {
        id: -1,
        name: '',
        login: '',
        password: '',
        status: USER_STATUS_NON_AUTHORIZATED,
        authErrorMessage: '',
    },
    userData: {
        favorites: [],
        messages: [],
        
    },
};

export function userStateReducer(state = initialState.userState, action) {
    const payload = action.payload;

    switch (action.type) {
        case USER_AUTHORIZATION_SUCCESS:
            return {
                name: payload.name,
                login: payload.login,
                status: USER_STATUS_AUTHORIZATED,
            };

        case USER_AUTHORIZATION_FAILED:
            return {
                login: payload.login,
                password: payload.password,
                authErrorMessage: payload.message,
                status: USER_STATUS_NON_AUTHORIZATED,
            };

        case USER_AUTHORIZATION_REQUEST:
            return {
                login: payload.login,
                password: payload.password,
                status: state.status,
            };

        default:
            return state;
    }
}

export function userDataReducer(state = initialState.userData, action) {
    switch (action.type) {
        case USER_ADDS_TO_FAVORITES_SUCCESS:
            return state;
        case USER_ADDS_TO_FAVORITES_FAILED:
            return state;
        case USER_ADDS_TO_FAVORITES_REQUEST:
            return state;
        default:
            return state;
    }
}
