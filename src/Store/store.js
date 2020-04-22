import {combineReducers, createStore} from 'redux'

import {setCoworkingMapReducer} from "../Reducers/Home/setCowokingMapReducer";

import {setLoggedUserReducer} from "../Reducers/Login/setLoggedUserReducer"


const store = createStore(combineReducers({

    setCoworkingMapReducer,
    setLoggedUserReducer

}))

export default store;