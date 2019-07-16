import React from 'react';
import {
  Button,
  Navbar,
  Nav
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



const NavBar = ({token}) => {

  const clearBEToken = async () => {
      fetch('https://127.0.0.1:5000/logout', {
      method: 'get',
      headers: new Headers({
        "Authorization" : `Token ${sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      })
    })
  }

   const cleartoken = (e) =>{
     e.preventDefault()
     clearBEToken()
     sessionStorage.clear('token')    
     window.location.replace('http://localhost:3000/login')
  }
    return (
        <nav id="main-nav">
        <div className="row">
          <div className="container">
    
            <div className="logo">
              <a href="/"><img src="css_js/images/logo1.png" alt="logo"/></a>
            </div>
    
            <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>
    
            <ul className="nav-menu list-unstyled">
                <li><a href="#header" className="smoothScroll">Home</a></li>
                <li><a href="#about" className="smoothScroll">About</a></li>
                <li>
                    <Nav.Link href='/login'className="smoothScroll" style={{padding:0}}>Login</Nav.Link>
                </li>
                <li>
                    <Nav.Link onClick={(e)=>cleartoken(e)} className="smoothScroll" style={{padding:0}}>Logout</Nav.Link>
                </li>
                <li><a href="#journal" className="smoothScroll">Why</a></li>
                <li><a href="#contact" className="smoothScroll">Contact</a></li>
            </ul>
    
          </div>
        </div>
      </nav>
    )
}

export default NavBar;