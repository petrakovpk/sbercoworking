import React from 'react';


class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(

            <div className="navbar navbar-light navbar-expand-md">

        <div className="container-fluid"><a className="navbar-brand" href="#">SberCoWorking</a>
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span
                className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                 id="navcol-1">

            </div>
        </div>

    </div>

        )
    }
}


export default NavigationPanel