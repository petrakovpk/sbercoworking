import React from 'react';


class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

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

                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Личный кабинет</button>

                </div>
            </nav>

        )
    }
}


export default NavigationPanel