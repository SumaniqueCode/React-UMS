import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './Components/Layout/Navbar';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import HomePage from './Components/Pages/HomePage';
import PageNotFound from './Components/Pages/PageNotFound';
import Footer from './Components/Layout/Footer'

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/about' element={<AboutPage />}/>
        <Route exact path='/contact' element={<ContactPage />}/>
        <Route path = '*' element ={<PageNotFound />}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
