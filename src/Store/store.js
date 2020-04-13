import {combineReducers, createStore} from 'redux'

import {
    setCoworkingMapBuildingReducer,
    setCoworkingMapFloorReducer,
    setCoworkingMapSectionReducer
} from "../Reducers/HomePage/setCowokingMapReducer";


const store = createStore( combineReducers({

    setCoworkingMapBuildingReducer,
    setCoworkingMapFloorReducer,
    setCoworkingMapSectionReducer


}))

export default store;