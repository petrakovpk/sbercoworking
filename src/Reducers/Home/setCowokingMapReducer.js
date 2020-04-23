import {
    CHANGE_COWORKING_MAP_BUILDING,
    CHANGE_COWORKING_MAP_FLOOR,
    CHANGE_COWORKING_MAP_SECTION,
    CHANGE_COWORKING_MAP_WORKPLACE,
    CHANGE_COWORKING_MAP_DAY
} from "../../Actions/Home/setCoworkingMap.js"

const defaultState = {

    coworkingMapBuilding: 1,
    coworkingMapFloor: 3,
    coworkingMapSection: 1,
    coworkingMapWorkplace: 1,
    coworkingMapDay: new Date()
}

export const setCoworkingMapReducer = (state = defaultState, action) => {


    switch (action.type) {

        case CHANGE_COWORKING_MAP_BUILDING:
            return {
                ...state,
                coworkingMapBuilding: action.payload

            };

        case CHANGE_COWORKING_MAP_FLOOR:

            return {
                ...state,
                coworkingMapFloor: action.payload

            };

        case CHANGE_COWORKING_MAP_SECTION:
            return {
                ...state,
                coworkingMapSection: action.payload

            };

        case CHANGE_COWORKING_MAP_WORKPLACE:
            return {
                ...state,
                coworkingMapWorkplace: action.payload

            };
        case CHANGE_COWORKING_MAP_DAY:
            return {
                ...state,
                coworkingMapDay: action.payload

            };
    }

    return state;

}
