export const CHANGE_COWORKING_MAP_BUILDING = 'CHANGE_COWORKING_MAP_BUILDING';
export const CHANGE_COWORKING_MAP_FLOOR = 'CHANGE_COWORKING_MAP_FLOOR';
export const CHANGE_COWORKING_MAP_SECTION = 'CHANGE_COWORKING_MAP_SECTION';
export const CHANGE_COWORKING_MAP_WORKPLACE = 'CHANGE_COWORKING_MAP_WORKPLACE';
export const CHANGE_COWORKING_MAP_DAY = 'CHANGE_COWORKING_MAP_DAY';

export const changeCoworkingMapBuilding = (building_id) => {


    return {
        type: CHANGE_COWORKING_MAP_BUILDING,
        payload: building_id
    }
}

export const changeCoworkingMapFloor = (floor) => {


    return {
        type: CHANGE_COWORKING_MAP_FLOOR,
        payload: floor
    }
}


export const changeCoworkingMapSection = (section) => {

    return {
        type: CHANGE_COWORKING_MAP_SECTION,
        payload: section
    }
}

export const changeCoworkingMapWorkplace = (workplace) => {

    return {
        type: CHANGE_COWORKING_MAP_WORKPLACE,
        payload: workplace
    }
}

export const changeCoworkingMapDay = (day) => {

    return {
        type: CHANGE_COWORKING_MAP_DAY,
        payload: day
    }
}
