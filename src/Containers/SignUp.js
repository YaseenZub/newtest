import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';
import { Link, Route  } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import {setDoc, doc} from 'firebase/firestore/lite'
import {authsignup, useAuth} from '../config/firebase'
import {useRef} from 'react';
import App from '../App';
import Home from './home';

import logo5 from '../Logo/logo5.png'
// import { BiHide,BiShowAlt } from "react-icons/bi";
// import ProtectedRoutes from '../Routes/protectedroutes';
// import Accordion from 'react-bootstrap/Accordion'


function SignUp(props){
  
  const currentUser=useAuth();
  let navigate=useNavigate();
 async function handleSubmit(event) {
   const email=event.target.elements[2].value;
  const password=event.target.elements[3].value;
  var md5 = require("md5");
    const pwhashed=md5(password);
    event.preventDefault();
  //   const name=event.target.elements[0].value;
  //   const rnum=Math.floor(Math.random() * 10000);
  //   const uid=name.concat(rnum);
  //  console.log(uid)
    const authenticated=await authsignup(email,pwhashed);
    
    if(authenticated){
    await setDoc(doc(props.db,"user-registeration",email),{
      
      FirstName: event.target.elements[0].value,
      LastName: event.target.elements[1].value,
      Email: event.target.elements[2].value,
      Password: pwhashed,
      Gender: event.target.elements[5].value,
      BloodGroup: event.target.elements[6].value,
      Age: event.target.elements[7].value,
      ContactNo: event.target.elements[8].value,
      // Address: event.target.elements[9].value,
      // City: event.target.elements[10].value
        
    }).then(function (res) {
      alert("Registeration Successful");
      window.email=email;
      
      // window.userAuth=true;
      // {<App state={true} />}
    navigate('/home')
     
    }).catch(function (err) {
      alert(err);
      window.userAuth=false;
    })
    
    console.log(email);
    
  }
 
  
}
    
const [passwordShown, setPasswordShown] = React.useState(false);
const togglePasswordVisiblity = () => {
  setPasswordShown(passwordShown ? false : true);
};
  return(
        <div className="SignUp" >
        <Card className="mycard text-left">
    <Form autoComplete="on" onSubmit={e=>{handleSubmit(e)}}>
      <Row className="su-title" >
        <div>CREATE ACCOUNT</div>
        </Row>
        {/* <img src={logo5} style={{ height: '35px', width: '35px' }} /> */}
      
      <hr></hr>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFname" >
      <Form.Label>First Name</Form.Label>
      <Form.Control className="" name="First Name" type="text" placeholder="First Name" required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLname">
    <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="Last Name" placeholder="Last Name" required/>
    </Form.Group>
  </Row>

    <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control  type="email" name="Email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridPassword">
      <Form.Label  >Password</Form.Label>
      {/* <BiShowAlt style={{float: 'right'}} /> */}
      
      <Form.Control type={passwordShown ? "text" : "password"} name="Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. Must not contain spaces or emoji." required  placeholder="Password" 
      
      />
     <Form.Check type="checkbox" label="Show password" onClick={togglePasswordVisiblity } style={{fontSize: "12px", paddingTop:'4px'}} />
  
     
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
    </Form.Group> */}
    
  
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridGender">
      <Form.Label>Gender</Form.Label>
      <Form.Select defaultValue={"Select"} style={{fontSize: "14px"}}  name="Gender" required>
      <option value="Select" disabled>Select.. </option>
        <option >Male</option>
        <option>Female</option>
        <option>Other</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridBG">
    <Form.Label>Blood Group</Form.Label>
      <Form.Select defaultValue={"Select"} style={{fontSize: "14px"}} name="Blood Group" required>
      
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
  </Row>

  <Form.Group  className="mb-3" controlId="formGridAge" >
  <Form.Label>Age</Form.Label>
      <Form.Control type="number" name="Age" placeholder="Age" min="10" required />
    </Form.Group>
      

    <Form.Group className="mb-3" controlId="formGridContact">
    <Form.Label>Contact No</Form.Label>
    <Form.Control pattern="[0]{1}[3]{1}[0-9]{9,9}" placeholder="E.g 03121212121" name="Contact No" required />
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control name="Address" placeholder="1234 Main St North Nazimabad" required/>
  </Form.Group>


    <Form.Group className="mb-3" controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control name="City" required />
    </Form.Group> */}


    

  {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

<div className="d-grid gap-2 mb-3">
  <Button variant="danger"  type="submit" >
   Sign Up
  </Button>
  </div>

<Row className="mb-3">
  <Col md={{  offset: 4 }}>
  <Form.Group  controlId="formGridCity">
      <Form.Text className="text-right">Already have an account? <Link to={{pathname: '/SignIn'}} className='link-danger'>Sign In</Link></Form.Text>
    </Form.Group>
    </Col>
    </Row>

</Form> 
</Card>



<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>



<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossOrigin="true"></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossOrigin="true"></script>

<script>var Alert = ReactBootstrap.Alert;</script>
        </div>
    )
  }
  

export default SignUp;