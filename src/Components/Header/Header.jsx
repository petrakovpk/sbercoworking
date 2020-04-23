import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {changeLoggedUser} from "../../Actions/Login/setLoggedUser";
import {bindActionCreators} from 'redux'

import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText} from 'reactstrap'


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            isOpen: false
        }
    }

    toggle = () => {
        this.setState(state => ({isOpen: !state.isOpen}));
    }


    render() {

        const userLogged = localStorage.getItem('user')

        const {
            loggedUser,
            changeLoggedUser
        } = this.props


        const {
            isOpen
        } = this.state


        return (

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">CoworkingPlanner</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>



                        {userLogged ? (

                            <div className="text-justify mr-3 text-center" type="submit"
                                 onClick={(() => {
                                     localStorage.removeItem('user')
                                 })}
                            >
                                {loggedUser}
                            </div>

                        ) : <div></div>}


                        {userLogged ? (


                            <button className="btn btn-outline-danger mr-3" type="submit"
                                    onClick={(() => {

                                        localStorage.removeItem('user')
                                        this.toggle()
                                        changeLoggedUser(null)

                                    })}
                            >
                                <Link className="text-danger" to='/login'>Выйти</Link>
                            </button>

                        ) : <div></div>}


                </Collapse>
            </Navbar>

        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        changeLoggedUser: bindActionCreators(changeLoggedUser, dispatch),
    }
}

const mapStateToProps = (state) => {

    return {
        loggedUser: state.setLoggedUserReducer.loggedUser,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)