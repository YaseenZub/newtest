// import React from 'react';
// import {db, useAuth} from './firebase';
// import { doc, getDoc } from "firebase/firestore/lite";


// async function auserdata(){
//      const [testuserdata, setuserdata] = React.useState(false)
//     const currentUser=useAuth();
//     const email=currentUser?.email;
//         await getDoc(doc(db,"user-registeration",email))
//         .then(
//             (doc) => {
//                 if (doc.exists) {
//                     console.log("Document data:", doc.data());
//                     const fname=doc.data().FirstName;
//                     const lname=doc.data().LastName;
//                     setuserdata(
//                         window.email=doc.data().Email,
//                         window.name=fname.concat(' ', lname),
//                         window.age=doc.data().Age,
//                         window.bloodgrp=doc.data().BloodGroup,
//                         window.city=doc.data().City,
//                         window.contact=doc.data().ContactNo,
//                         window.gender=doc.data().Gender,
//                         window.address=doc.data().Address,
                       
//                     )
                    
//                 } else {
//                     // doc.data() will be undefined in this case
//                     console.log("No such document!");
//                 }
//             })
//             .catch((error) => {
//                 console.log("Error getting document:", error);
//             });
//     }
    
// }

// export {auserdata};