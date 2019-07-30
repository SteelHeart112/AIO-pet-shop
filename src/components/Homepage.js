import '../App.css';
import React from 'react';
import NavBar from './Navbar';
import Events  from './Events';
import PopularProducts from './PopularProducts';
import Footer from './Footer';
import About from './About';


function Homepage(props) {
  
  return (
    <div className="app">
        <NavBar 
        token = {props.token}
        isLogged = {props.isLogged}
        />
        <About />
        <Events />
        <PopularProducts />
        <Footer />
      </div>
  );
}

export default Homepage;
