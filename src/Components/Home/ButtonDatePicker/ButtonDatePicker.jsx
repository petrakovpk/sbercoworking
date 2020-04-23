import React from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import {connect} from "react-redux";


class ButtonDatePicker extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {

        const {
            coworkingMapDay
        } = this.props
        return (

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Дата:</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={coworkingMapDay.toLocaleDateString()}/>
            </InputGroup>

        )

    }
}

const
    mapStateToProps = (state) => {

        return {

            coworkingMapDay: state.setCoworkingMapReducer.coworkingMapDay
        }

    }


export default connect(mapStateToProps)

(
    ButtonDatePicker
)