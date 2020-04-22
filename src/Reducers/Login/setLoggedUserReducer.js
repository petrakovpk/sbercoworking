import {CHANGE_LOGGED_USER} from "../../Actions/Login/setLoggedUser"

const defaultState = {

    loggedUser: localStorage.getItem('user')

}


export const setLoggedUserReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.payload

            };
    }

    return state;
}
