import { Navigate,Outlet } from "react-router";
import { useAuth } from '../config/firebase';
import React from 'react';
function ProtectedRoutes(){
   
    const isAuth=window.userAuth;
    console.log(window.userAuth);
    return isAuth ? <Outlet /> : <Navigate to="/" />;
}



export default ProtectedRoutes;