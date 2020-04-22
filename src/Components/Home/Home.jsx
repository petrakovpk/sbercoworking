import React from 'react';
import ButtonSetBuildingModal from "./ButtonSetBuildingModal"
import ButtonSetFloor from "./ButtonSetFloor"
import ButtonSetSection from "./ButtonSetSection"
import CoworkingMap from "./CoworkingMap";
import ButtonDatePicker from "./ButtonDatePicker";
import WorkplaceDescription from "./WorklpaceDescription";
import {API_URL} from "../../settings";
import {connect} from "react-redux";



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buildings: [],
            coworkingName: '',
            coworkingAddress: '',
            floors: [],
            mapFloor: '1'
        }

    }

    componentDidMount() {

        this.load_homepage()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.coworkingMapBulding !== prevProps.coworkingMapBulding) {

            this.load_homepage()
        }


    }

    load_homepage() {

        const {
            coworkingMapBulding
        } = this.props

        //Получаем название названия и адреса всех зданий
        fetch(API_URL + "/buildings")
            .then(res => res.json())
            .then((result) => {

                    this.setState({
                        buildings: []
                    })

                    for (let i = 0; i <= result['buildings'].length - 1; i++) {
                        this.setState(prevState => ({
                            buildings: [...prevState.buildings, result['buildings'][i]]
                        }))
                    }


                }
            )

        //Получаем название и адрес главное  кнопки
        fetch(API_URL + "/buildings/" + coworkingMapBulding)
            .then(res => res.json())
            .then((result) => {

                this.setState({
                    coworkingName: result['building_name'],
                    coworkingAddress: result['building_address'],
                    floors: []
                })

                for (let i = 0; i <= result['floors'].length - 1; i++) {
                    this.setState(prevState => ({
                        floors: [...prevState.floors, result['floors'][i]]
                    }))
                }
            })


    }


    render() {


        const {
            buildings,
            coworkingName,
            coworkingAddress,
            floors,
            mapFloor
        } = this.state


        return (

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6 offset-3 mt-3">


                        <ButtonSetBuildingModal
                            button_buildings={buildings}
                            coworkingName={coworkingName}
                            coworkingAddress={coworkingAddress}
                        />

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-12 text-left mt-3">

                        <div className="card">

                            <div className="card-body">

                                <div className="row">

                                    <div className="col-md-2 text-center">

                                        <ButtonDatePicker/>

                                    </div>

                                    <div className="col-md-2 text-center">

                                        <ButtonSetFloor
                                            floors={floors}
                                        />

                                    </div>

                                    <div className="col-md-2 text-center">

                                        <ButtonSetSection/>

                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>

                </div>

                <div className="row mx-auto mt-3 text-center">

                    <div className="col-md-9 card">

                        <CoworkingMap
                            coworkingMapFloor={mapFloor}
                        />

                    </div>

                    <div className="col-md-3 card">

                        <WorkplaceDescription/>

                    </div>

                </div>


            </div>


        )

    }
}


const mapStateToProps = (state) => {

    return {
        coworkingMapBulding: state.setCoworkingMapReducer.coworkingMapBuilding,
        coworkingMapFloor: state.setCoworkingMapReducer.coworkingMapFloor,


    }
}


export default connect(mapStateToProps)(Home)