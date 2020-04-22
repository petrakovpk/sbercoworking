import React from 'react';
import {connect} from "react-redux";
import ButtonBookWorkplace from "../ButtonBookWorkplace";
import {API_URL} from "../../../settings";
import Carousel, {Modal, ModalGateway} from 'react-images';


class WorkplaceDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workplaceName: "",
            workplaceNumber: "",
            workplacePK: "",
            workplacePrinter: "",
            workplaceWiFi: "",
            modalIsOpen: false
        }

    }

    componentDidMount() {

        this.loadWorkplaceViaProps()


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if ((this.props.coworkingMapWorkplace !== prevProps.coworkingMapWorkplace)
            || (this.props.coworkingMapFloor !== prevProps.coworkingMapFloor)
        ) {

            this.loadWorkplaceViaProps()

        }

    }

    loadWorkplaceViaProps() {

        const {
            coworkingMapWorkplace,
            coworkingMapBuilding,
            coworkingMapFloor

        } = this.props

        this.setState({
            workplaceName: '',
            workplaceNumber: '',
            workplacePK: '',
            workplacePrinter: '',
            workplaceWiFi: ''
        })




        //Получаем описание рабочего места
        fetch(API_URL + "/buildings/" + coworkingMapBuilding + '/' + coworkingMapFloor + '/' + coworkingMapWorkplace)
            .then(res => res.json())
            .then((result) => {

                    this.setState({
                        workplaceName: result['workplace_name'],
                        workplaceNumber: result['workplace_number'],
                        workplacePK: result['workplace_pk'],
                        workplacePrinter: result['workplace_printer'],
                        workplaceWiFi: result['workplace_wifi']
                    })


                }
            )


    }

    toggleModal = () => {
        this.setState(state => ({modalIsOpen: !state.modalIsOpen}));
    }

    render() {

        const {
            coworkingMapBuilding,
            coworkingMapWorkplace,
            coworkingMapFloor
        } = this.props

        const {
            workplaceNumber,
            workplaceName,
            workplacePK,
            workplacePrinter,
            workplaceWiFi,
            modalIsOpen
        } = this.state


        const images = [{
            src: 'http://127.0.0.1:5000/buildings/'
                + coworkingMapBuilding + '/'
                + coworkingMapFloor + '/'
                + coworkingMapWorkplace + '/map.jpg'
        }];

        const workplacepPicURL = 'http://127.0.0.1:5000/buildings/'
            + coworkingMapBuilding + '/'
            + coworkingMapFloor + '/'
            + coworkingMapWorkplace + '/map.jpg'

        return (
            <div className="card-body d-flex flex-column">

                <p><b>{workplaceNumber}</b> {workplaceName} </p>

                <img src={workplacepPicURL} alt="Выберите рабочее место" width="300" height="150"
                     onClick={() => {
                         this.toggleModal()
                     }}

                     style={{"cursor": "pointer"}}
                />

                <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel views={images}/>
                        </Modal>
                    ) : null}
                </ModalGateway>


                <div className="text-left">

                    <p/>

                    <b>Компьютер:</b> {workplacePK}

                    <p/>

                    <b>Wi-fi:</b> {workplaceWiFi}

                    <p/>

                    <p/>
                    <b>Принтер:</b> {workplacePrinter}
                    <p/>

                    <b>Свободно: </b> 19.04.2020


                </div>

                <ButtonBookWorkplace/>


            </div>

        )

    }
}

const mapStateToProps = (state) => {

    return {
        coworkingMapBuilding: state.setCoworkingMapReducer.coworkingMapBuilding,
        coworkingMapFloor: state.setCoworkingMapReducer.coworkingMapFloor,
        coworkingMapWorkplace: state.setCoworkingMapReducer.coworkingMapWorkplace,
    }
}

export default connect(mapStateToProps)(WorkplaceDescription)