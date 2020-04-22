export const CHANGE_LOGGED_USER = 'CHANGE_LOGIN_USER';


export const changeLoggedUser = (login) => {


    return {
        type: CHANGE_LOGGED_USER,
        payload: login
    }
}