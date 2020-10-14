import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    onMarkerClick = (props, marker) =>
        this.setState({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
        activeMarker: null,
        showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    };

    render() {
        if (!this.props.loaded) return <div className="text-light">Loading...</div>;

        const mapStyles = [{
            width: "100%%",
            height: "100%"
        }];

        const containerStyle = { 
            display:"flex",
            margin: "25px", 
            position: "relative",
            width: "calc(55vh - 20px)",
            height: "calc(55vh - 20px)",
            justify: "center"
        }

        return (
            <div className="row m-0 justify-content-center">
                <Map
                    className="map"
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    containerStyle={containerStyle}
                    styles={mapStyles}
                    zoom={15}
                    initialCenter={{ lat: -23.631086, lng: -46.605308 }}
                >

                    <Marker 
                        title={'Martin Instalações em geral e Marcenaria'}
                        name={'Martin Instalações em geral e Marcenaria'}
                        position={{ lat: -23.631086, lng: -46.605308 }} 
                        onClick={this.onMarkerClick} />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            onClose={this.onInfoWindowClose}
                            visible={this.state.showingInfoWindow}
                        >
                            <div>
                                <h6 className="pt-3 text-center justify-content-center">
                                    {this.state.selectedPlace.name}</h6>
                                <p>Rua Abranches de Moura, 175<br></br>Vila Moraes</p>
                            </div>
                        </InfoWindow>
                </Map>
        </div>
        );
    }
    }
export default GoogleApiWrapper({
    apiKey: "AIzaSyBOLvqu5S_eLscxYgL7Ddqvr7YYFXiKf7c",
    version: "3.38"
})(MapContainer);
