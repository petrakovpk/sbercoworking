import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {
    changeCoworkingMapBuilding,
    changeCoworkingMapFloor,
    changeCoworkingMapWorkplace
} from "../../../Actions/Home/setCoworkingMap";
import {bindActionCreators} from 'redux'


class ButtonSetBuildingModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        }
    }

    toggle = () => {

        const {
            modal
        } = this.state

        this.setState({
            modal: !modal
        })
    }

    //Динамическое формирование зданий

    createSelectItems(button_buildings) {


        const {
            changeCoworkingMapBuilding,
            changeCoworkingMapFloor,
            changeCoworkingMapWorkplace
        } = this.props


        if (button_buildings === undefined) {
            return
        }

        //Динамическое создание списка
        // https://stackoverflow.com/questions/36205673/how-do-i-create-a-dynamic-drop-down-list-with-react-bootstrap

        let items = [];

        for (let i = 0; i <= button_buildings.length - 1; i++) {

            items.push(
                <div className="col-md-3 col-12 btn-group text-center mt-3 mt-md-1">
                    <button
                        type="button"
                        className="btn btn-light card"
                        key={button_buildings[i]['building_id']}
                        onClick={() => {
                            changeCoworkingMapBuilding(button_buildings[i]['building_id'])
                            changeCoworkingMapFloor(1)
                            changeCoworkingMapWorkplace(1)
                            this.toggle()
                        }}
                    >
                        <div className="container-fluid text-center">

                        <h5 > {button_buildings[i]['building_name']}</h5>
                        {button_buildings[i]['building_address']}

                        </div>

                    </button>
                </div>
            );
        }

        return items;
    }


    render() {

        const {
            modal
        } = this.state


        const {
            button_buildings,
            coworkingName,
            coworkingAddress
        } = this.props


        return (
            <div>
                <button className="btn btn-light" onClick={this.toggle}><h5>{coworkingName}</h5>

                    {coworkingAddress}

                </button>

                <Modal
                    isOpen={modal}
                    toggle={this.toggle}
                    className="modal-dialog modal-xl"
                >

                    <ModalHeader toggle={this.toggle}>Выберите здание</ModalHeader>

                    <ModalBody>

                        <input type="text" className="form-control" placeholder="Введите адрес или название"/>

                        <p></p>

                        <div className="row">
                            {this.createSelectItems(button_buildings)}
                        </div>

                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        changeCoworkingMapBuilding: bindActionCreators(changeCoworkingMapBuilding, dispatch),
        changeCoworkingMapFloor: bindActionCreators(changeCoworkingMapFloor, dispatch),
        changeCoworkingMapWorkplace: bindActionCreators(changeCoworkingMapWorkplace, dispatch)
    }
}

const mapStateToProps = (state) => {

    return {
        coworkingMapBulding: state.setCoworkingMapReducer.coworkingMapBuilding
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonSetBuildingModal)
