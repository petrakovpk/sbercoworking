import React from 'react';
import ButtonModalFindCoworking from "./ButtonModalFindCoworking"
import ButtonSetFloor from "./ButtonSetFloor"
import ButtonSetSection from "./ButtonSetSection"
import CoworkingMap from "./CoworkingMap";
import ButtonDatePicker from "./ButtonDatePicker";
import WorkplaceDescription from "./WorklpaceDescription";


class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6 offset-3">

                        <ButtonModalFindCoworking/>

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-12 text-left mt-3">

                        <div className="card">

                            <div className="card-body">

                                <div className="row">

                                    <div className="col-md-2 text-center">

                                        <ButtonDatePicker/>
                                    </div>

                                    <div className="col-md-2 text-center">


                                        <ButtonSetFloor/>


                                    </div>
                                    <div className="col-md-2 text-center" >

                                        <ButtonSetSection/>
                                    </div>



                                </div>

                            </div>


                        </div>


                    </div>
                </div>

                <div className="row mx-auto mt-3 text-center">

                    <div className="col-md-9 card">

                        <CoworkingMap/>

                    </div>

                    <div className="col-md-3 card" >

                        <WorkplaceDescription/>

                    </div>

                </div>


            </div>


        )

    }
}

export default HomePage