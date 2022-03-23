import React from 'react';
import {db} from '../config/firebase'
import { doc, getDoc } from "firebase/firestore/lite";
import { useAuth } from '../config/firebase';
import Card from 'react-bootstrap/Card'
import MyNav from './nav';
import '../App.css'

function Profile(){
    const [testuserdata, setuserdata] = React.useState(false)
    const currentUser=useAuth();
    const email=currentUser?.email;

    React.useEffect(() => {
        myprofile()
      }, [])
    const myprofile=async()=>{
        // const docRef = db.collection("user-registeration").doc(email);
        await getDoc(doc(db,"user-registeration",email))
        .then(
            (doc) => {
                if (doc.exists) {
                    const fname=doc.data().FirstName;
                    const lname=doc.data().LastName;
                    setuserdata(
                        window.email=doc.data().Email,
                        window.name=fname.concat(' ', lname),
                        window.age=doc.data().Age,
                        window.bloodgrp=doc.data().BloodGroup,
                        // window.city=doc.data().City,
                        window.contact=doc.data().ContactNo,
                        window.gender=doc.data().Gender,
                        window.address=doc.data().Address,
                       
                    )
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
        
      

}


    return(
        <div className="profile">
            <MyNav />
            <br />
            <div className='cardDiv'>
    <Card border="danger" style={{ width: '18rem' }} onLoad={myprofile()}>
    {/* <Card.Header  bg="danger">Account Details</Card.Header> */}
    <Card.Body>
      <Card.Title>Account Details</Card.Title>
      <Card.Text>
     <b> Name: </b> {`${window.name}`}
      <br />
      
      <b> Email: </b>{`${window.email}`}
      <br />

      <b> Age: </b>{`${window.age}`}
      <br />
      
      <b> Blood Group: </b>{`${window.bloodgrp}`}
      <br />
      
      <b>Gender: </b> {`${window.gender}`}
      <br />

      <b>Contact No: </b> {`${window.contact}`}
      <br />

      <b>Address: </b> {`${window.address}`}
      <br />
{/* 
      <b>City: </b> {`${window.city}`}
      <br /> */}
      

      
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
        </div>
    )
}

export default Profile;