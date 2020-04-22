import React from 'react';
import './App.css';
import Header from "../Header"
import PrivateHome from "../Home/PrivateHome"
import Home from "../Home/"
import Login from "../Login"
import {Route, Switch} from 'react-router-dom';
import {changeLoggedUser} from "../../Actions/Login/setLoggedUser";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            changeLoggedUser
        } = this.props


        changeLoggedUser(localStorage.getItem('user'))
    }


    render() {


        return (

            <div className="App">

                <Header/>

                <Switch>

                    <PrivateHome exact path="/" component={Home}/>

                    <Route exact path="/login" component={Login}/>


                </Switch>

            </div>


        );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
