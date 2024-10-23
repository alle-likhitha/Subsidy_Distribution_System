// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Authentication from './Authentication';
import AuthenticationUser from './AuthenticationUser';
// import AdminDashboard from './AdminDashboard';
import AppMain from "./AppMain";
import React from 'react';
// import Images from './containers/Images/Images';

function App() {
  let routes = (
    <Routes>
      <Route path='/' element={<AppMain />} />
      <Route path='/auth' element={<Authentication />} />
      <Route path='/authuser' element={<AuthenticationUser />} />
      {/* <Route path='/admindashboard' element={<AdminDashboard/>} /> */}
      
      {/* Redirect to '/' if no route matches */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <div className="App">
     {routes}
    </div>
  );
}

export default App;
