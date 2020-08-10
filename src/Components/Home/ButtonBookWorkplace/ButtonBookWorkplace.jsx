import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import {connect} from "react-redux";


import 'moment/locale/ru';

import 'react-day-picker/lib/style.css';
import {API_URL} from "../../../settings";

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        this.getFullYear()
    ].join('');
};

class ButtonBookWorkplace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            workplaceDate: new Date(),
            login: ""

        }
    }

    componentDidMount() {

        const {
            workplaceDate
        } = this.state

        this.loadBookingData(workplaceDate)

    }


    onDatePick = (e) => {

        this.setState({
            workplaceDate: e,

        })

        this.loadBookingData(e)


    }

    loadBookingData = (date) => {

        const {
            coworkingMapWorkplace,
            coworkingMapBuilding,
            coworkingMapFloor

        } = this.props

        //Получаем описание рабочего места
        fetch(API_URL + "buildings/" + coworkingMapBuilding + '/' + coworkingMapFloor + '/' + coworkingMapWorkplace)
            .then(res => res.json())
            .then((result) => {


                    this.setState({
                        login: ""
                    })
                    if (result['bookings'] === undefined) {
                        return
                    }

                    for (let i = 0; i <= result['bookings'].length - 1; i++) {
                        if (result['bookings'][i]['date'] == date.yyyymmdd()) {
                            this.setState({
                                login: result['bookings'][i]['user_id']
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
            loggedUser

        } = this.props

        const {
            workplaceDate
        } = this.state

        fetch(API_URL + "buildings/" + coworkingMapBuilding + '/' + coworkingMapFloor + '/' + coworkingMapWorkplace + '/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "user_id": loggedUser,
                "date": workplaceDate.yyyymmdd(),
                "type": type
            })
        })
            .then(resp => resp.json())
            .then(data => {


                    this.loadBookingData(workplaceDate)
                }
            )
    }


    toggle = () => {



        const {
            modal,
            workplaceDate 
        } = this.state

        this.setState({
            modal: !modal
        })

        this.loadBookingData(workplaceDate)
    }

    render() {

        const {
            modal,
            workplaceDate,
            login
        } = this.state


        return (

            <div className="mt-auto">


                <button type="button" className="btn btn-outline-primary btn-block"
                        onClick={this.toggle}> Управление бронированием
                </button>


                <Modal
                    isOpen={modal}
                    toggle={this.toggle}
                    className="modal-dialog modal-lg"
                >

                    <ModalHeader toggle={this.toggle}><b>303 А</b> "Король"</ModalHeader>

                    <ModalBody>

                        <div className="row mx-auto">


                            <div className="col-md-6">

                                <DayPicker localeUtils={MomentLocaleUtils} locale="ru" onDayClick={(e) => {
                                    this.onDatePick(e)
                                }}/>


                            </div>


                            <div className="col-md-6">

                                <b>Дата:</b> {workplaceDate.toLocaleDateString()}
                                <p/>
                                <b>Пользователь:</b> {login}
                                <p/>

                                <b>Статус: </b> {login ? <span>Занято </span> : <span>Свободно</span>}

                                <p/>


                                {login ?

                                    <button type="button" className="btn btn-outline-danger mt-auto"
                                            onClick={
                                                () => {
                                                    this.bookDate('unbook')
                                                }
                                            }
                                    >
                                        Отменить бронирование
                                    </button> :
                                    <button type="button" className="btn btn-outline-primary mt-auto"
                                            onClick={
                                                () => {
                                                    this.bookDate('book')
                                                }
                                            }
                                    >
                                        Забронировать
                                    </button>

                                }


                            </div>


                        </div>

                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        coworkingMapBuilding: state.setCoworkingMapReducer.coworkingMapBuilding,
        coworkingMapFloor: state.setCoworkingMapReducer.coworkingMapFloor,
        coworkingMapWorkplace: state.setCoworkingMapReducer.coworkingMapWorkplace,

        loggedUser: state.setLoggedUserReducer.loggedUser
    }
}


export default connect(mapStateToProps)(ButtonBookWorkplace)