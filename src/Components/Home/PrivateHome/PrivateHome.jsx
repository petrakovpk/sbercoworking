import React from 'react'

import {Redirect, Route} from 'react-router-dom'

import Home from "../../Home"

const PrivateHome = ({component: Component, ...rest}) => {

    // Add your own authentication on the below line.
    const isLoggedIn = localStorage.getItem('user')


    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Home {...props} />
                ) : (
                    <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
                )
            }
        />
    )
}

export default PrivateHome