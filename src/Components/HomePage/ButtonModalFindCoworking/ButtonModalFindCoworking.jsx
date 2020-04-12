import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


class ButtonModalFindCoworking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    }

    render() {

        const {
            modal
        } = this.state

        const toggle = () => {

            this.setState({
                modal: !modal
            })
        }

        return (
            <div>
                <button className="btn btn-light" onClick={toggle}><h5>БЦ Академический</h5>

                    Москва, проспект 60-летия октября, д9 с2

                </button>

                <Modal
                    isOpen={modal}
                    toggle={toggle}
                    className="modal-dialog modal-xl"
                >

                    <ModalHeader toggle={toggle}>Выберите здание</ModalHeader>

                    <ModalBody>
                        <input type="text" className="form-control" placeholder="Введите адрес или название"/>

                        <p></p>

                        <div className="row">

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Академический</h6> пр-т 60-летия октября, д9 с.2</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Президент Плаза (корпус Б)</h6>Кутузовский проспект 32, стр. 2</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Президент Плаза (корпус Г)</h6>Кутузовский проспект, 32</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Поклонка Плейс</h6> Поклонная, д. 3А, корп. 1, 2, 3
                                </button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>Вавилова, 19</h6>Вавилова, 19</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>Вавлова, 23</h6>Вавилова, 23</button>

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

export default ButtonModalFindCoworking