import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {connect} from "react-redux";
import {API_URL} from "../../../settings";
import {changeCoworkingMapWorkplace} from "../../../Actions/Home/setCoworkingMap";
import {bindActionCreators} from 'redux'


class CoworkingMap extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {


        this.loadMapViaProps()


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.coworkingMapFloor !== prevProps.coworkingMapFloor) {

            this.loadMapViaProps()

        }

    }


    //Загружаем карту из картинок
    loadMapViaProps() {

        if (this.map) {
            this.map.remove()
        }


        this.map = L.map('map-pasha', {
            crs: L.CRS.Simple,
            minZoom: -1,
            maxZoom: 1,

        });

        const {
            changeCoworkingMapWorkplace
        } = this.props


        const {
            coworkingMapFloor,
            coworkingMapBuilding
        } = this.props


        const map_url = API_URL+'/buildings/'
            + coworkingMapBuilding + '/'
            + coworkingMapFloor + '/map.png'


        //Получаем рабочие места
        fetch(API_URL + "/buildings/" + coworkingMapBuilding + '/' + coworkingMapFloor)
            .then(res => res.json())
            .then((result) => {

                    const width = result['floor_map_width']
                    const height = result['floor_map_height']

                    const bounds = [[0, 0], [height, width]];

                    L.imageOverlay(map_url, bounds).addTo(this.map);

                    this.map.setView([height / 2, width / 2], 0);

                    const workplaces = result['workplaces']

                    for (let i = 0; i <= workplaces.length - 1; i++) {

                        L.polygon(
                            [
                                [
                                    workplaces[i]['p1_x'],
                                    workplaces[i]['p1_y']
                                ],
                                [
                                    workplaces[i]['p2_x'],
                                    workplaces[i]['p2_y']

                                ],
                                [
                                    workplaces[i]['p3_x'],
                                    workplaces[i]['p3_y']

                                ],
                                [
                                    workplaces[i]['p4_x'],
                                    workplaces[i]['p4_y']
                                ]
                            ],
                            {
                                color: 'green',
                                stroke: false,
                            }
                        ).addTo(this.map).on(
                            'click',  () => {

                                changeCoworkingMapWorkplace(workplaces[i]['workplace_id'])

                            }
                        )


                    }


                }
            )

    }


    render() {

        return (
            <div className="container-fluid d-flex flex-column" style={{"height": "500px"}} id='map-pasha'>

            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        changeCoworkingMapWorkplace: bindActionCreators(changeCoworkingMapWorkplace, dispatch),
    }
}


const mapStateToProps = (state) => {

    return {
        coworkingMapBuilding: state.setCoworkingMapReducer.coworkingMapBuilding,
        coworkingMapFloor: state.setCoworkingMapReducer.coworkingMapFloor,
        coworkingMapSection: state.setCoworkingMapReducer.coworkingMapSection,
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CoworkingMap)