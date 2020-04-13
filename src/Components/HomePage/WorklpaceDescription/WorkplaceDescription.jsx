import React from 'react';
import pic from './pic2.jpg';

class WorkplaceDescription extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="card-body d-flex flex-column">

                <p><b>303 А</b> "Король" </p>


                <img src={pic} alt="Responsive image" width="300" height="150"/>



                <div className="text-left">

                <p/>

                    <b>Alpha:</b> да

                <p/>
                    <b>Sigma:</b> нет

                <p/>

                    <b>Wi-fi:</b> Hight connection

                <p/>
                <b>Свободно сегодня: </b> Да

                <p/>

                <b>Свободно завтра: </b> Да

                <p/>

                </div>

                <button type="button" className="mt-auto btn btn-outline-primary ">Забронировать</button>


            </div>

        )

    }
}

export default WorkplaceDescription