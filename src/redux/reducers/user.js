import {
    USER_AUTHORIZATION_SUCCESS,
    USER_AUTHORIZATION_FAILED,
    USER_AUTHORIZATION_REQUEST,

    USER_STATUS_AUTHORIZATED,
    USER_STATUS_NON_AUTHORIZATED,

    USER_ADDS_TO_FAVORITES,
    USER_DELETES_FROM_FAVORITES,
} from '../types';


const initialState = {
    userState: {
        isUserLogged: false,
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
                isUserLogged: true,
                name: payload.name,
                login: payload.login,
                status: USER_STATUS_AUTHORIZATED,
            };

        case USER_AUTHORIZATION_FAILED:
            return {
                isUserLogged: false,
                login: payload.login,
                password: payload.password,
                authErrorMessage: payload.message,
                status: USER_STATUS_NON_AUTHORIZATED,
            };

        case USER_AUTHORIZATION_REQUEST:
            return {
                isUserLogged: false,
                status: USER_STATUS_AUTHORIZATED,
            };

        default:
            return state;
    }
}

export function userDataReducer(state = initialState.userData, action) {
    switch (action.type) {
        case USER_ADDS_TO_FAVORITES:
            return state;
        case USER_DELETES_FROM_FAVORITES:
            return state;
        default:
            return state;
    }
}
