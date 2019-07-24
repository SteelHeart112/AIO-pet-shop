// import logo from './logo.svg';
import '../App.css';
import React, {useEffect, useState}  from 'react';
import NavBar from '../components/navbar';
import Journal  from './Journal';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Services from './Services';
import Footer from './Footer';
import About from './About';
import Header from './Header';

function Homepage(props) {
  
  return (
    <div className="app">
        <NavBar 
        token = {props.token}
        isLogged = {props.isLogged}
        />
        <Header />
        <About />
        <Journal />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
  );
}

export default Homepage;
