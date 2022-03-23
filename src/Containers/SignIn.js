import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import App from '../App';
import logo5 from '../Logo/logo5.png'
import Home from './home';
import {useNavigate } from 'react-router-dom'
import { authlogin } from '../config/firebase';
import {connect} from 'react-redux';
import {set_data} from '../store/action';


function SignIn(){
  let navigate=useNavigate();
  let state=false;
  async function login(event){
  
    event.preventDefault();
    
    const email=event.target.elements[0].value;
    const password=event.target.elements[1].value;
    var md5 = require("md5");
    const pwhashed=md5(password);
    const alogin=await authlogin(email, pwhashed)
    .then(function (res) {
      alert("Successfully Logged In")
     
      window.userAuth=true;
      // set_data(email)
      state=true
    {<App state={true} />}
      navigate('/home')
    }).catch(function (err) {
      alert("Error", err)
      window.userAuth=false;
    })
    
    if(alogin){
      
    }

    
    
  }
   
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

    return(
        <div className="SignIn" >
        <Card className="mycard tet-left">
    <Form autoComplete="on" onSubmit={e=>{login(e)}}>
      <Row className="su-title" >
        <div>LOGIN</div>
       </Row>
      <hr></hr>
      {/* <img src={logo5} style={{ height: '35px' , width: '35px' }} /> */}
      
    <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridPassword">
      <Form.Label  >Password</Form.Label>
      <Form.Control type={passwordShown ? "text" : "password"} name="Password"  required  placeholder="Password" 
      
      />
     <Form.Check type="checkbox" label="Show password" onClick={togglePasswordVisiblity } style={{fontSize: "12px", paddingTop:'4px'}} />
  
    </Form.Group>
  

<div className="d-grid gap-2 mb-3">
  <Button variant="danger"  type="submit">
   Sign In
  </Button>
  </div>

<Row className="mb-3">
  <Col md={{  offset: 4 }}>
  <Form.Group  controlId="formGridCity">
      <Form.Text className="text-right">Don't have an account? 
      <Link to={{pathname: '/'}} className='link-danger'>Sign Up</Link>
      {/* <a href="#" className='link-danger'>Sign Up</a> */}
      </Form.Text>
    </Form.Group>
    </Col>
    </Row>

</Form> 
</Card>



        </div>
    )
}

// const mapStateToProps=(state)=>({
//   users :state.users
// })

// const mapDispatchToProps = (dispatch) => ({
//   set_data: (email)=>dispatch(set_data(email))
  
// })

export default SignIn;