import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './nav';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'

import animate from '../Logo/animate.mp4'

function AboutUs ()
{
    

    return (

        <div className= "aboutus">
            <MyNav />
            <Card className="mapcard" style={{ width: '90%', textAlign: 'left' }}>
                    <Row className="su-title" >
                        <div>ABOUT US</div>

                </Row>
                <Row className="su-title" >
                    <div><video src={animate} style={{ width: '70%' }} loop autoplay="true" /></div>

                </Row>
                     
                    
                    <Row  >
                    "We all know that a person decision to donate blood saves lives,
                    every minute of a day someone needs blood whether they are surgery and
                    transplant patients or are accident and burn victims. The person in need
                    of blood makes a lot of appeal for blood around ,which takes time and due to
                    unavailability of data of donor the recipient couldnot contact one, so finding a
                    donor in real-time is actually a struggling task. Keeping that in consideration we
                    observed the need of an application that can bring ease to the society by saving human lives. The main motive is to provide a reliable platform that will connect the blood donors and recipients in the fastest and easiest way. It will search, notify and connect the blood donor to the person in need of blood. Users will be able to select any location and the application will search for a donor in a nearby area, and the application will provide donors in real-time
                    which increases the possibility of saving lives and also decreases shortage of blood."
                    <br />
                    So we have made this platform to serve humanity.
                    </Row>

                
            </Card>
           
            
            



        </div>
    )

}
export default AboutUs;
