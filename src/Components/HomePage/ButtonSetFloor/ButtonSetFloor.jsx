import React from 'react';
import {Dropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import {connect} from "react-redux";
import {changeCoworkingMapFloor} from "../../../Actions/HomePage/setCoworkingMap.js"
import {bindActionCreators} from 'redux'
import {API_URL} from "../../../settings.js"
import DropdownItem from "reactstrap/es/DropdownItem";


class ButtonSetFloor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,

            //Динамический список этажей
            floors: []
        }
    }

    componentDidMount() {

        const {
            coworkingMapBulding
        } = this.props

        //Получаем Название и Адрес здания из API

        fetch(API_URL + "/buildings/" + coworkingMapBulding)
            .then(res => res.json())
            .then((result) => {
                for (let i = 0; i <= result['floors'].length - 1; i++) {
                    this.setState(prevState => ({
                        floors: [...prevState.floors, result['floors'][i]]
                    }))
                }
            })

    }

    //Динамическое формирование спика этажей

    createSelectItems() {

        const {
            floors
        } = this.state

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
                onClick={()=>{
                    changeCoworkingMapFloor(i+1)
                }}

            >{floors[i]}</DropdownItem>);
        }

        return items;
    }


    render() {

        const {
            dropdownOpen
        } = this.state

        const toggle = () => {
            this.setState({
                dropdownOpen: !dropdownOpen
            })
        }


        return (

            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="card">

                <DropdownToggle caret color="white">
                    1 этаж
                </DropdownToggle>

                <DropdownMenu>
                    {this.createSelectItems()}
                </DropdownMenu>
            </Dropdown>

        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        changeCoworkingMapFloor: bindActionCreators(changeCoworkingMapFloor, dispatch),
    }
}

const mapStateToProps = (state) => {

    return {
        coworkingMapBulding: state.setCoworkingMapBuildingReducer.coworkingMapBuilding
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonSetFloor)