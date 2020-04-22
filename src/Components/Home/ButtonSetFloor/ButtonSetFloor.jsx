import React from 'react';
import {Dropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import {connect} from "react-redux";
import {changeCoworkingMapFloor, changeCoworkingMapWorkplace} from "../../../Actions/Home/setCoworkingMap";
import {bindActionCreators} from 'redux'
import DropdownItem from "reactstrap/es/DropdownItem";


class ButtonSetFloor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
        }
    }

    createDropdownToggle(floors, coworkingMapFloor) {

        if (floors[coworkingMapFloor - 1] === undefined) {
            return
        }

        let items = []

        items.push(
            <DropdownToggle caret color="white">

                {floors[coworkingMapFloor - 1]['floor_name']}

            </DropdownToggle>
        )

        return items
    }


    //Динамическое формирование спика этажей

    createSelectItems(floors) {

        const {
            changeCoworkingMapFloor,
            changeCoworkingMapWorkplace
        } = this.props

        if (floors === undefined) {
            return
        }

        //Динамическое создание списка
        // https://stackoverflow.com/questions/36205673/how-do-i-create-a-dynamic-drop-down-list-with-react-bootstrap

        let items = [];

        for (let i = 0; i <= floors.length - 1; i++) {
            items.push(<DropdownItem
                key={i}
                value={[i]}
                onClick={() => {
                    changeCoworkingMapFloor(floors[i]['floor_id'])
                    changeCoworkingMapWorkplace(1)

                }}

            >{floors[i]['floor_name']}</DropdownItem>);
        }

        return items;
    }

    toggle = () => {

        const {
            dropdownOpen
        } = this.state

        this.setState({
            dropdownOpen: !dropdownOpen
        })

    }


    render() {

        const {
            dropdownOpen
        } = this.state

        const {
            coworkingMapFloor,
            floors
        } = this.props


        return (

            <Dropdown isOpen={dropdownOpen} toggle={this.toggle} className="card">

                {this.createDropdownToggle(floors, coworkingMapFloor)}

                <DropdownMenu>

                    {this.createSelectItems(floors)}

                </DropdownMenu>

            </Dropdown>

        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        changeCoworkingMapFloor: bindActionCreators(changeCoworkingMapFloor, dispatch),
        changeCoworkingMapWorkplace: bindActionCreators(changeCoworkingMapWorkplace, dispatch)
    }
}

const mapStateToProps = (state) => {

    return {
        coworkingMapFloor: state.setCoworkingMapReducer.coworkingMapFloor,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonSetFloor)