import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {changeLoggedUser} from "../../Actions/Login/setLoggedUser";
import {bindActionCreators} from 'redux'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const userLogged = localStorage.getItem('user')

        const {
            loggedUser,
            changeLoggedUser
        } = this.props


        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">CoworkingPlanner</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">


                    </ul>

                    {userLogged ? (

                        <div className="text-justify mr-3" type="submit"
                             onClick={(() => {
                                 localStorage.removeItem('user')
                             })}
                        >
                            {loggedUser}
                        </div>

                    ) : <div></div>}


                    {userLogged ? (


                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"
                                onClick={(() => {

                                    localStorage.removeItem('user')
                                    changeLoggedUser(null)

                                })}
                        >
                            <Link className="text-danger" to='/login'>Выйти</Link>
                        </button>

                    ) : <div></div>}

                </div>
            </nav>

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