import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import MyNav from './nav'
import { collection, query, where, getDocs } from "firebase/firestore";
import {app} from '../config/firebase'
import { doc} from "firebase/firestore/lite";
import {getFirestore} from 'firebase/firestore'
import Modal from 'react-bootstrap/Modal'

import Geocode from "react-geocode";
const mapStyles = {
    width: '90%',
    height: '70%',
    left: '5%'
};

export class Request extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        currentLocation: {},
        data:[]

    };
    constructor(props) {
        super(props);
        this.requestDonor = this.requestDonor.bind(this);
      }
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
    
    setLgShow=()=>{
        this.setState({
        lgShow:false,
        data:[]
        })
    }

    requestDonor= async (event)=> {
        event.preventDefault();
        
        const email=window.user;
        const bg=event.target.elements[1].value;
        const dbb=getFirestore(app);
        const colRef =collection(dbb, "user-registeration");
        let q;
        switch(bg){
            case "A+":
                q = query(colRef, where("BloodGroup", "in", ["A+", "A-", "O+", "O-" ]));
                break;
            case "O+":
                q = query(colRef, where("BloodGroup", "in", [ "O+", "O-" ]));
                break;
            case "B+":
                q = query(colRef, where("BloodGroup", "in", ["B+", "B-", "O+", "O-" ]));
                break;
            case "AB+":
                q = query(colRef, where("BloodGroup", "in", ["AB+","AB-", "A+", "A-","B+", "B-", "O+", "O-" ]));
                break;
            case "A-":
                q = query(colRef, where("BloodGroup", "in", [ "A-", "O-" ]));
                break;
            case "O-":
                q = query(colRef, where("BloodGroup", "in", [ "O-" ]));
                break;
            case "B-":
                q = query(colRef, where("BloodGroup", "in", ["B-", "O-" ]));
                break;
            case "AB-":
                q = query(colRef, where("BloodGroup", "in", ["AB-", "A-", "B-", "O-" ]));
                break;
            default:
                console.log("No Blood Group Selected")
        
       }
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            let name=doc.data().FirstName;
            
            let { data, mydata } = this.state;
            mydata=name.concat(" ", doc.data().BloodGroup," ", doc.data().ContactNo, "\n");
            data.push(mydata)
            // this.setState({
            //      data.push(mydata)
            // })
        // doc.data() is never undefined for query doc snapshots
        console.log( doc.data().FirstName, " ", doc.data().BloodGroup, doc.data().ContactNo, "  ");
        
    }
        
        );
        this.setState({
            lgShow:true
            })
        
        
        // this.setLgShow(true)
        //   console.log(email,event.target.elements[0].value, event.target.elements[1].value);
         
        }


    handleCurrentLocation = async () => {
        const self = this;
        navigator.geolocation.getCurrentPosition(function (position) {
           
        console.log("Position=>", position)

        Geocode.setApiKey("AIzaSyCrQ1FTcXaMpac1SxSfPv10Xi0Kys6Ko-Q");

        Geocode.setLanguage("en");

        Geocode.setRegion("es");

        Geocode.setLocationType("ROOFTOP");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();
        
        var lt= position.coords.latitude;
        var lg=  position.coords.longitude;
        console.log("lt LG=>",lt, lg)
        
        // Get address from latitude & longitude.
        Geocode.fromLatLng(lt,lg).then(
            (response) => {
    
                self.setState({
                    address: response.results[0].formatted_address
                    
                })
            },
            (error) => {
                console.error(error);
            }
        );
        
            
             });
            
       
    }
     
        


    render() {
        return (

            <div className="map"> 
            <MyNav />
            <Card className="mapcard" style={{width: '90%', textAlign: 'left'}}>
                {/* <h3>Request a Donor Nearby:
                </h3> */}

                {/* <h6>coordinates({this.state.currentLocation.lat} , {this.state.currentLocation.lng})</h6> */}
                <Form onSubmit={this.requestDonor} >
                <Row className="su-title" >
                <div>REQUEST A DONOR</div>
        
                </Row>
                <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Recipient's Location:</Form.Label>
                <Form.Control  type="text" name="location"value={`${this.state.address}`}  required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Required Blood Type:</Form.Label>
                <Form.Select defaultValue={"Select"} style={{fontSize: "14px"}}  name="Blood Group" required>
                <option value="Select"  disabled>Select.. </option>
                <option>A+</option>
                <option>A-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                </Form.Select>
                </Form.Group>
                <div className="d-grid  mb-3">
                <Button variant="danger"  type='submit' >
                Proceed Request
                </Button>
                </div>
                </Form>
            </Card>
            <Modal
        size="lg"
        show={this.state.lgShow}
        onHide={this.setLgShow}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Donors who can donate you the Blood 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{whiteSpace:'pre-line'}}>{this.state.data}</Modal.Body>
      </Modal>
                <div className="mapdiv">
               <Map google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                     onClick={this.onMapClicked}
                    >
                        <Marker onClick={this.onMarkerClick}
                            name={'karachi'} />
                    

                </Map> 
                </div>
            
                    
            </div>
            


        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCrQ1FTcXaMpac1SxSfPv10Xi0Kys6Ko-Q')
})(Request)


// AIzaSyA8GSLEwOCybJ-uQAb2vKxbeSE9CjwmStw