import {
    USER_AUTHORIZATION_SUCCESS,
    USER_AUTHORIZATION_FAILED,
    USER_AUTHORIZATION_REQUEST,

    USER_STATUS_AUTHORIZATED,
    USER_STATUS_NON_AUTHORIZATED,
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
    const { login, password, name, message } = action.payload;

    switch (action.type) {
        case USER_AUTHORIZATION_SUCCESS:
            return {
                isUserLogged: true,
                name: name,
                login: login,
                status: USER_STATUS_AUTHORIZATED,
            };

        case USER_AUTHORIZATION_FAILED:
            return {
                isUserLogged: false,
                login: login,
                password: password,
                authErrorMessage: message,
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

export function userDataReducer(state = initialState.UserData, action) {
    switch (action.type) {
        case 1:
            return state;
        default:
            return state;
    }
}
