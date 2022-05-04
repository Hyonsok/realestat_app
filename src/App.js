import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Houses from './pages/Houses';
import HouseDetail from './pages/HouseDetail';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route path='/houses' element={<Houses/>} />
            <Route path='/house-details' element={<HouseDetail/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  };
  
}

export default App;