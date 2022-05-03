import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Houses from './pages/Houses.js';
import SignUp from './pages/SignUp.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/houses' component={<Houses/>} />
          <Route path='/signup' component={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;