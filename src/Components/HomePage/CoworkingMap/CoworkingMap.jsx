import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import logo from "./map1.png"

class CoworkingMap extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.map = L.map('map-pasha', {
            crs: L.CRS.Simple,
            minZoom: 0,
            maxZoom: 1
        });

        const bounds = [[0, 0], [360, 981]];

        L.imageOverlay(logo, bounds).addTo(this.map);


        L.polygon([
            [29, 535],
            [86, 535],
            [86, 586],
            [29, 586]
        ],
            {
                color: 'green',
                stroke: false,

            }).addTo(this.map);


         L.polygon([
            [28, 854],
            [146, 854],
            [146, 955],
            [28, 955]
        ],
            {
                color: 'green',
                stroke: false,

            }).addTo(this.map);


        L.polygon([
            [29, 310],
            [65, 310],
            [65, 340],
            [29, 340]
        ],
            {
                color: 'red',
                stroke: false
            }).addTo(this.map);

        this.map.setView([180, 490], 0);

    }

    render() {


        return (
            <div className="container-fluid d-flex flex-column" style={{"height": "500px"}} id='map-pasha'>
            </div>

        )
    }
}

export default CoworkingMap