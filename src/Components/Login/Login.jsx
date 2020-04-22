import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {changeLoggedUser} from "../../Actions/Login/setLoggedUser";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

    }

    handleChangeLogin = (event) => {

        this.setState(
            {username: event.target.value})
    }

    handleChangepassword = (event) => {

        this.setState(
            {password: event.target.value})
    }


    onClickLogin = () => {

        const {
            changeLoggedUser
        } = this.props

        fetch("http://127.0.0.1:5000/users/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "login": this.state.username,
                "password": this.state.password
            })
        })
            .then(resp => resp.json())
            .then(data => {



                if (data['auth'] === 'ok') {
                    localStorage.setItem("user", this.state.username);

                    changeLoggedUser(this.state.username)

                    document.location = '/';

                }
            })
    }


    render() {

        return (
            <div className="row mt-5">


                <div className="col-md-2 offset-5">

                    Вход в систему

                    <input type="text" className="form-control mt-3"
                           onChange={(e) => {
                               this.handleChangeLogin(e)
                           }}
                           placeholder="Login"/>


                    <input type="text" className="form-control mt-3"
                           onChange={(e) => {
                               this.handleChangepassword(e)
                           }}
                           placeholder="Password"/>


                    <button className="btn btn-outline-primary mt-3" onClick={this.onClickLogin}> Войти</button>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

         changeLoggedUser: bindActionCreators(changeLoggedUser, dispatch),
    }
}


export default connect(null,mapDispatchToProps)(Login)
