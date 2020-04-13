import React from 'react';
import './App.css';
import NavigationPanel from "../NavigationPanel"
import HomePage from "../HomePage"
import store from '../../Store/store.js';
import {Provider} from 'react-redux'

function App() {
    return (
        <Provider store={store}>

            <div className="App">

                <NavigationPanel/>

                <HomePage/>

            </div>

        </Provider>
    );
}

export default App;
