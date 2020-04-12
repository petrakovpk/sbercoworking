import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const ButtonSetSection= (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>

            <DropdownToggle caret color="light" >
                Секция №3
            </DropdownToggle>

            <DropdownMenu>
                <DropdownItem>Секция №1</DropdownItem>
                <DropdownItem>Секция №2</DropdownItem>
                <DropdownItem>Секция №3</DropdownItem>
                <DropdownItem>Секция №4</DropdownItem>
                <DropdownItem>Секция №5</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}


export default ButtonSetSection