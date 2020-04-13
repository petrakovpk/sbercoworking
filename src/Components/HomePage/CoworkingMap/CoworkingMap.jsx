import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {connect} from "react-redux";

//Подгружаем все картинки из ../../../img/maps
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../../../img/maps/', false, /\.(png|jpe?g|svg)$/));


class CoworkingMap extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        const {
            coworkingMapBuilding,
            coworkingMapFloor,
            coworkingMapSection
        } = this.props

        console.log(coworkingMapFloor)


        this.map = L.map('map-pasha', {
            crs: L.CRS.Simple,
            minZoom: 0,
            maxZoom: 1
        });

        this.loadMapViaProps()

        this.loadPolygonsViaProps()

    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.coworkingMapFloor !== prevProps.coworkingMapFloor){
            console.log(this.props.coworkingMapFloor)

            this.loadMapViaProps()

            this.loadPolygonsViaProps()

        }
    }

    //Загружаем карту из картинок
    loadMapViaProps(){

        const {
            coworkingMapBuilding,
            coworkingMapFloor,
            coworkingMapSection
        } = this.props

        const map_name = 'raspletina' + '_' + coworkingMapFloor + '_' + coworkingMapSection + '.png'

        const bounds = [[0, 0], [360, 981]];

        L.imageOverlay(images[map_name], bounds).addTo(this.map);

        this.map.setView([180, 490], 0);

    }

    //Загружаем полигоны
    loadPolygonsViaProps(){

        L.polygon([
                [29, 535],
                [86, 535],
                [86, 586],
                [29, 586]
            ],
            {
                color: 'green',
                stroke: false,

            }).addTo(this.map);


        L.polygon([
                [28, 854],
                [146, 854],
                [146, 955],
                [28, 955]
            ],
            {
                color: 'green',
                stroke: false,

            }).addTo(this.map);


        L.polygon([
                [29, 310],
                [65, 310],
                [65, 340],
                [29, 340]
            ],
            {
                color: 'red',
                stroke: false
            }).addTo(this.map);

    }


    render() {



        return (
            <div className="container-fluid d-flex flex-column" style={{"height": "500px"}} id='map-pasha'>


            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        coworkingMapBuilding: state.setCoworkingMapBuildingReducer.coworkingMapBuilding,
        coworkingMapFloor: state.setCoworkingMapFloorReducer.coworkingMapFloor,
        coworkingMapSection: state.setCoworkingMapSectionReducer.coworkingMapSection,
    }

}

export default connect(mapStateToProps)(CoworkingMap)