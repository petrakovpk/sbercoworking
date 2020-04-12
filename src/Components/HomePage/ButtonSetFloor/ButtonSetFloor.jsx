import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


const ButtonSetFloor = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (



                <Dropdown isOpen={dropdownOpen} toggle={toggle} className="card">

                    <DropdownToggle caret color="white"
                    >
                        3 этаж
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>1 этаж</DropdownItem>
                        <DropdownItem>2 этаж</DropdownItem>
                        <DropdownItem active>3 этаж</DropdownItem>
                        <DropdownItem>4 этаж</DropdownItem>
                        <DropdownItem>5 этаж</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

    );
}


export default ButtonSetFloor