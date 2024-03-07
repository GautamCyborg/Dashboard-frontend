import React from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Card from './components/Card';
import './index.css';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/update" element={<Card/>}/>
            {/* <Route path ="/dashboard" element={<Dashboard/>}/> */}
            <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard}/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;