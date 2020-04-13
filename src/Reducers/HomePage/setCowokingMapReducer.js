import {
    CHANGE_COWORKING_MAP_BUILDING,
    CHANGE_COWORKING_MAP_FLOOR,
    CHANGE_COWORKING_MAP_SECTION
} from "../../Actions/HomePage/setCoworkingMap.js"

const defaultState = {

    coworkingMapBuilding: 1,
    coworkingMapFloor: 3,
    coworkingMapSection: 1
}

export const setCoworkingMapBuildingReducer = (state = defaultState, action) => {

    switch (action.type) {

        case CHANGE_COWORKING_MAP_BUILDING:
            return {
                ...state,
                coworkingMapBuilding: action.payload

            };
    }


    return state;

}

export const setCoworkingMapFloorReducer = (state = defaultState, action) => {

    switch (action.type) {

        case CHANGE_COWORKING_MAP_FLOOR:

            return {
                ...state,
                coworkingMapFloor: action.payload

            };
    }


    return state;

}

export const setCoworkingMapSectionReducer = (state = defaultState, action) => {

    switch (action.type) {

        case CHANGE_COWORKING_MAP_SECTION:
            return {
                ...state,
                coworkingMapSection: action.payload

            };
    }


    return state;

}
