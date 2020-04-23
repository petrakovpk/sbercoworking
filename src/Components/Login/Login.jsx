import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {changeLoggedUser} from "../../Actions/Login/setLoggedUser";
import {API_URL} from "../../settings"

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginInputStyle: "form-control mt-3",
            passwordInputStyle: "form-control mt-3"
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

        fetch(API_URL + "/users/", {
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

                        this.setState({
                            loginInputStyle: "form-control mt-3",
                            passwordInputStyle: "form-control mt-3"
                        })

                    } else if (data['auth'] === 'loginError') {
                        this.setState({

                            loginInputStyle: "form-control mt-3 border-danger"

                        })
                    } else if (data['auth'] === 'passwordError') {

                        this.setState({
                            loginInputStyle: "form-control mt-3",
                            passwordInputStyle: "form-control mt-3 border-danger"

                        })
                    }
                }
            )
    }


    render() {

        const {
            loginInputStyle,
            passwordInputStyle
        } = this.state

        return (

            <div className="container-fluid">
                <div className="row mt-5">


                    <div className="col-md-2 col-8 offset-md-5 offset-2">

                        Вход в систему
                        <p/>

                        <p>test/test</p>

                        <input type="text" className={loginInputStyle}

                               onChange={(e) => {
                                   this.handleChangeLogin(e)
                               }}
                               placeholder="Login"/>


                        <input type="text" className="form-control mt-3 " className={passwordInputStyle}
                               onChange={(e) => {
                                   this.handleChangepassword(e)
                               }}
                               placeholder="Password"/>


                        <button className="btn btn-outline-primary mt-3" onClick={this.onClickLogin}>Войти</button>
                        <p></p>


                    </div>
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


export default connect(null, mapDispatchToProps)(Login)
