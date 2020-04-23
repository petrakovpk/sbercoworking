import React from 'react';
import {connect} from "react-redux";
import {API_URL} from "../../../settings";
import Carousel, {Modal, ModalGateway} from 'react-images';
import {changeCoworkingMapWorkplace} from "../../../Actions/Home/setCoworkingMap";
import {bindActionCreators} from 'redux'
import ButtonBookWorkplace from "../ButtonBookWorkplace"

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        this.getFullYear()
    ].join('');
};

class WorkplaceDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workplaceName: "",
            workplaceNumber: "",
            workplacePK: "",
            workplacePrinter: "",
            workplaceWiFi: "",
            modalIsOpen: false,
            isBooked: false,
            userBooked: ''
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
            coworkingMapFloor,
            coworkingMapDay,

            changeCoworkingMapWorkplace

        } = this.props


        this.setState({
            workplaceName: '',
            workplaceNumber: '',
            workplacePK: '',
            workplacePrinter: '',
            workplaceWiFi: '',
            isBooked: false,
            userBooked: ''
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
                        workplaceWiFi: result['workplace_wifi'],
                        isBooked: false,
                        userBooked: ''
                    })


                    for (let j = 0; j <= result['bookings'].length - 1; j++) {
                        if (result['bookings'][j]['date'] == coworkingMapDay.ddmmyyyy()) {
                            this.setState({
                                isBooked: true,
                                userBooked: result['bookings'][j]['user_id']
                            })
                        }
                    }



                }
            )


    }

    bookDate = (type = 'book') => {

        const {
            coworkingMapWorkplace,
            coworkingMapBuilding,
            coworkingMapFloor,
            loggedUser,
            coworkingMapDay,


        } = this.props


        fetch(API_URL + "buildings/" + coworkingMapBuilding + '/' + coworkingMapFloor + '/' + coworkingMapWorkplace + '/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "user_id": loggedUser,
                "date": coworkingMapDay.yyyymmdd(),
                "type": type
            })
        })
            .then(resp => resp.json())
            .then(data => {
                    this.loadWorkplaceViaProps()
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
            coworkingMapFloor,
            coworkingMapDay
        } = this.props

        const {
            workplaceNumber,
            workplaceName,
            workplacePK,
            workplacePrinter,
            workplaceWiFi,
            modalIsOpen,
            isBooked,
            userBooked
        } = this.state


        const images = [{
            src: API_URL + '/buildings/'
                + coworkingMapBuilding + '/'
                + coworkingMapFloor + '/'
                + coworkingMapWorkplace + '/map.jpg'
        }];

        const workplacepPicURL = API_URL + '/buildings/'
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
                    {userBooked ? <div>

                            <b>Дата: </b> {coworkingMapDay.toLocaleDateString()} </div> :
                        <div><b>Дата: </b></div>
                    }
                    <p/>

                    <b>Сотрудник: </b> {userBooked}


                </div>

                <ButtonBookWorkplace/>




            </div>

        )

    }
}

//<div className="mt-auto">
//
//                     {isBooked ?
//                         <button type="button" className="btn btn-outline-danger btn-block"
//                                 onClick={() => {
//                                     this.bookDate('unbook')
//                                 }}
//                         >Отменить бронирование
//                         </button> :
//
//                         <button type="button" className="btn btn-outline-success btn-block"
//                                 onClick={() => {
//                                     this.bookDate('book')
//                                 }}
//                         >Забронировать
//                         </button>
//                     }
//
//                 </div>

const
    mapDispatchToProps = (dispatch) => {

        return {

            changeCoworkingMapWorkplace: bindActionCreators(changeCoworkingMapWorkplace, dispatch),
        }
    }


const mapStateToProps = (state) => {

    return {
        coworkingMapBuilding: state.setCoworkingMapReducer.coworkingMapBuilding,
        coworkingMapFloor: state.setCoworkingMapReducer.coworkingMapFloor,
        coworkingMapWorkplace: state.setCoworkingMapReducer.coworkingMapWorkplace,
        coworkingMapDay: state.setCoworkingMapReducer.coworkingMapDay,
        loggedUser: state.setLoggedUserReducer.loggedUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkplaceDescription)