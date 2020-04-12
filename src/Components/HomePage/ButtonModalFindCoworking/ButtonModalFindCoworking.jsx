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

                                <button type="button" className="btn btn-light"><h6>БЦ Поле</h6>Расплетина 10к1</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Президент Плаза</h6>Кутузовский 32</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Главное здание</h6>Вавилова 19</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Пашин дом</h6> Зарайская 47к1
                                </button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Монолит</h6>Остоженка</button>

                            </div>

                            <div className="col-md-2">

                                <button type="button" className="btn btn-light"><h6>БЦ Западный порт</h6>Кутузовский 31</button>

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