import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

const mapStyles = {
    width: '60%',
    height: '60%',left:'20%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        currentLocation: {}
    };
    componentDidMount() {
        this.handleCurrentLocation();
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }

    };
    handleCurrentLocation = async () => {
        const self = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            self.setState({
                currentLocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            }); console.log(position)

        });
    }

    render() {
        return (

            <div class="parent"> 
                <Form>
                    <h3>Select required blood type</h3>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="A+"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="A-"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            {/*<Form.Check*/}
                            {/*    inline*/}
                            {/*    disabled*/}
                            {/*    label="3 (disabled)"*/}
                            {/*    type={type}*/}
                            {/*    id={`inline-${type}-3`}*/}
                            {/*/>*/}
                            <Form.Check
                                inline
                                label="B+"
                                name="group1"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label="B-"
                                name="group1"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            <Form.Check
                                inline
                                label="O+"
                                name="group1"
                                type={type}
                                id={`inline-${type}-6`}
                            />
                            <Form.Check
                                inline
                                label="O-"
                                name="group1"
                                type={type}
                                id={`inline-${type}-7`}
                            />
                            <Form.Check
                                inline
                                label="AB+"
                                name="group1"
                                type={type}
                                id={`inline-${type}-8`}
                            />
                            <Form.Check
                                inline
                                label="AB-"
                                name="group1"
                                type={type}
                                id={`inline-${type}-8`}
                            />
                        </div>
                    ))}
                </Form>
                
                <h3>Your current location:
                </h3>
                <h6>coordinates({this.state.currentLocation.lat} , {this.state.currentLocation.lng})</h6>
                
                <Button variant="danger" size="lg">
                    Find blood donor nearby

                </Button>
                <h3>                                </h3>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <h3>                          </h3>

                
                    <Map google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                     onClick={this.onMapClicked}
                    >
                        <Marker onClick={this.onMarkerClick}
                            name={'karachi'} />
                    <div class="child" style={{
                        position: 'relative', top: 10
                        }}
                        >
                            <h2>Your location:
                            </h2>
                            <h2>coordinates({this.state.currentLocation.lat} , {this.state.currentLocation.lng})</h2>


                        </div>





                        {/*<InfoWindow*/}
                        {/*    marker={this.state.activeMarker}*/}
                        {/*    visible={this.state.showingInfoWindow}>*/}
                        {/*    <div>*/}
                        {/*        <h1>{this.state.selectedPlace.name}</h1>*/}
                        {/*    </div>*/}
                        {/*</InfoWindow>*/}
                </Map>
                
            </div> //parent div closing

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA8GSLEwOCybJ-uQAb2vKxbeSE9CjwmStw')
})(MapContainer)