import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './nav';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import image from '../Logo/image.jpeg'

function Faq() {


    return (

        <div className="faq">
            <MyNav />
            <Card className="mapcard" style={{ width: '90%', textAlign: 'left' }}>
                <Row className="su-title" >
                    <div><h1>FAQ's</h1></div>

                </Row>
                <Row className="su-title" >
                    <h5> who can donate blood to whom? </h5>
                    <div><img src={image} style={{ width: '300px' }}  /></div>
                    

                </Row>


                <Row  >
                    <br />

                    <h5>Is donating blood safe?</h5>
                    <br />

                    <h6>
                        Absolutely. Blood donation conditions are sanitary, and needles are sterile and disposable. </h6>
                    <br />
                    <h5>Is donating blood harmful?</h5>
                    <br/>

                    <h6>
                        Blood donation is safe. New, sterile disposable equipment is used for each donor, so there's no risk of contracting a bloodborne infection by donating blood.
                        If you're a healthy adult, you can usually donate a pint (about half a liter)
                        of blood without endangering your health</h6>
                    <br />
                    <h5>How many times can I donate blood?</h5>
                    <h6>
                       Men can give blood every 12 weeks and women can give blood every 16 weeks. </h6>
                    <br />
                   
                    <h5>At what age blood can be donated?
                         </h5>
                    <br />

                    <h6>Age: If you are aged between 18 and 65.
                        </h6>
                    <br />
                    

                    <h5>Who shouldnot donate blood?</h5>
                    <br />

                    <h6>
                        Persons with the following conditions are not allowed to donate blood anyime:  
                        Cancer.
                        Cardiac disease.
                        Sever lung disease.
                        Hepatitis B and C.       
                        HIV infection, AIDS or Sexually Transmitted Diseases (STD).     
                       
                        Unexplained weight loss of more than 5 kg over 6 months.
                        Chronic alcoholism.   
                    </h6>
                    <br />

                    <h5>What should eat after blood donation?</h5>
                    <br />

                    <h6>
                        Quick Tips for Blood Donors:
                        Foods and liquids to eat before blood donation	Iron-rich foods Plenty of water A light and healthy
                        snack B-complex vitamins Vitamin C-rich foods for better absorption of iron Rest properly before blood donation
                    </h6>
                    <br />

                    <h5>Is donating blood good for your liver?</h5>
                    <br />

                    <h6> 
                       
                        Giving blood can help your liver stay healthy

                        Research has linked too much iron with NAFLD,
                        Hepatitis C and other liver diseases and infections. Though there are many other factors involved in these problems,
                        donating blood can help relieve some of those iron stores and avoid extra issues in your liver. </h6>
                    <br />
                    <br />

                    <h5>How will I feel after donating? What activities can I do after my donation?</h5>
                    <br />

                    <h6> 
                        Most donors feel fine after donating. Remember to eat a healthy meal afterwards and drink plenty of fluids.
                        You can continue your normal routine, but avoid heavy lifting and strenuous exercise for 12 hours. </h6>
                    <br />


                    
                </Row>


            </Card>






        </div>
    )

}
export default Faq;
