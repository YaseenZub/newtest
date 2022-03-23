import React from 'react'
import '../App.css'
import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import ToastContainer from 'react-bootstrap/ToastContainer'
import MyNav from './nav'
function Notifications() {
    const [showA, setShowA] = React.useState(true);
    
    const toggleShowA = () => setShowA(!showA);
    
    return (
      <div className='noti'>
          <MyNav />
            <br />
            <Row className="su-title" >
                <div>NOTIFICATIONS</div>
                </Row>
                
            <ToastContainer position='relative top-center' className="position-relative mapcard" >
                {/*<Card className="mapcard" style={{ width: '90%', textAlign: 'left' }}>*/}
            <Row>
          <Toast  show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">user569</strong>
              <small>11 sec ago</small>
            </Toast.Header>
            <Toast.Body>A person near you is in need of blood group AB+
                {/* <br/> 
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                <Button variant="outline-danger" className="float-right" size="sm">Find More</Button>
                </div> */}

            </Toast.Body>
          </Toast>
          </Row>
          <Row>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">user931</strong>
              <small>1 day ago</small>
            </Toast.Header>
            <Toast.Body>A person near you is in need of blood group AB+</Toast.Body>
          </Toast>
          </Row>
                    {/*<Card />*/}
                </ToastContainer>
              
        </div>
     
    );
  }
  

export default Notifications;