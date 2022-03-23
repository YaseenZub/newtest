import {app, auth, db, useAuth} from '../../config/firebase'
import { doc, getDoc } from "firebase/firestore/lite";


const set_data=(email)=>{
    return (dispatch)=>{
        console.log(email)
        dispatch ({type: "SETDATA", email: email})
        
    }
}

export {set_data}
