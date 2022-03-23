import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaHome  } from "react-icons/fa";
import { BiAddToQueue, BiReset, BiLocationPlus,BiBell, BiLogOut, BiFile  } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { VscSignOut } from "react-icons/vsc";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineQuestionCircle, AiOutlineFileProtect } from "react-icons/ai";
import { useAuth, logout } from '../config/firebase';
import {useNavigate } from 'react-router-dom'
import App from '../App'
import logo3 from '../Logo/logo3.png'

function MyNav(){
    const hs="Help & Support";
    let navigate=useNavigate();

    async function handleSignout(){
        try{
        await logout();
        {<App state={true} />}
        window.userAuth=false;
        window.name='';
        navigate('/')
        }
        catch{
            console.log('Logout failed')
        }
    }
    return(
        <div className='Nav'>
<Navbar variant="dark" bg="danger" expand="lg" >
  <Container style={{textAlign: "left"}} >
    <Navbar.Brand href="/home">
        <img src={logo3} style={{height:'50px'}} />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">
            <FaHome />{'  '} Home
         </Nav.Link>
         <Nav.Link href="/profile">
         <CgProfile />{'  '} My Profile
         </Nav.Link>
        <Nav.Link href="/request">
            <BiLocationPlus />{'  '} Request
        </Nav.Link>
        <Nav.Link href="/post">
            <BiAddToQueue />{'  '} Post
        </Nav.Link>
        
        <Nav.Link href="/notifications">
            <MdOutlineNotificationsActive />{'  '} Notifications
        </Nav.Link>
        
        <Nav.Link href="/aboutus">
            <BsInfoCircle />{'  '} About Us
        </Nav.Link>
        <NavDropdown title={"Help & Support "}  id="basic-nav-dropdown">
          <NavDropdown.Item href="/faqs"> 
          <AiOutlineQuestionCircle /> FAQ's
          </NavDropdown.Item>
          <NavDropdown.Item href="/termsandconditions">
          <BiFile />{" Terms & Conditions"}
              </NavDropdown.Item>
          <NavDropdown.Item href="https://www.privacypolicygenerator.info/live.php?token=swLj8Qqs0Sf9sHaySeu0adH4IdIw2rUD">
          <AiOutlineFileProtect /> Privacy Policy
              </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={handleSignout}>
            <VscSignOut />{'  '} Sign Out
        </Nav.Link>

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export default MyNav;