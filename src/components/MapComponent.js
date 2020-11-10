import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {

    render() {
        if (!this.props.loaded) return <div className="text-light">Loading...</div>;

        return (
            <Map
                className="map"
                google={this.props.google}
                onClick={this.onMapClicked}
                zoom={15}
                style={{
                    "position": "absolute",
                    "right": "35px",
                    "bottom": "30px",
                    "display": "inherit",
                    "overflow": "hidden"
                }}
                initialCenter={{ lat: -23.631086, lng: -46.605308 }}>

                    <Marker 
                        title={'Martin Instalações em geral e Marcenaria'}
                        name={'Martin Instalações em geral e Marcenaria'}
                        position={{ lat: -23.631086, lng: -46.605308 }}/>
                </Map>
        );
    }
}

const mapsKey = process.env.REACT_APP_MAPS_KEY;


export default GoogleApiWrapper({
    apiKey: mapsKey,
    version: "3.38"
})(MapContainer);
