import React from 'react';
import { db } from '../config/firebase'
import { doc, getDoc } from "firebase/firestore/lite";
import { useAuth } from '../config/firebase';
import Card from 'react-bootstrap/Card'
import MyNav from './nav';
import '../App.css'

import logo5 from '../Logo/logo5.png'
import Row from 'react-bootstrap/Row';


function PastRequest() {
    



    }


    return (
        <div className="profile">
            <MyNav />
            <br />
            <div className='cardDiv'>
                <Card border="danger" style={{ width: '18rem' }} onLoad={myprofile()}>
                    {/* <Card.Header  bg="danger">Account Details</Card.Header> */}
                    <Card.Body>
                        <Card.Title>
                            <Row className="su-title" >
                                <div>MY ACCOUNT</div>
                            </Row>

                            <img src={logo5} style={{ height: '35px' }} />
                        </Card.Title>
                        <Card.Text>
                           

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default PastRequest;