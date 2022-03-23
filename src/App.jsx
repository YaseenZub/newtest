import './App.css';
import SignUp from './Containers/SignUp';
import Home from './Containers/home';
import Profile from './Containers/profile'
import React from 'react';
import {BrowserRouter as Router,Link, Routes, Route} from 'react-router-dom';
import SignIn from './Containers/SignIn';
import {db} from './config/firebase'
import ProtectedRoutes from './Routes/protectedroutes';
import Notifications from './Containers/notifications'
import Post from './Containers/post/App'
import MyMap from './Containers/map'
import Request from './Containers/request'
import AboutUs from './Containers/aboutus'
import Faq from './Containers/faq'


function App(props) {
  
  console.log("App props=>", props);
    const isAuth=props.state;
    console.log(isAuth)
  return (
    <div className="App">
      <Router>
      <Routes>
      {/* <Route element={<PublicRoutes isnotAuth={isAuth}/>} > */}
        <Route path="/" exact element={<SignUp db={db} />} />
        <Route path="/signin" exact element={<SignIn/>} />  
        {/* </Route> */}
        {/* <Route element={<ProtectedRoutes />} > */}
        <Route path="/home" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/post" exact element={<Post />} />
        <Route path="/notifications" exact element={<Notifications />} />
        <Route path="/map" exact element={<MyMap />} />
        <Route path="/request" exact element={<Request />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/faqs" exact element={<Faq />} />


        {/* </Route>   */}
    
      </Routes>
      </Router>
    </div>
  );
}

    


export default App;
