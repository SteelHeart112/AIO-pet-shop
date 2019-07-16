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
import Products from './Products';

function Homepage(props) {
  
//   const [token, setToken] = useState('')
//   const accessToken = (window.location.search.split("=")[0] === "?api_key") ? window.location.search.split("=")[1] : null;
//   const existingToken = sessionStorage.getItem('token');

//   //--------------------------------------------> GET Products API
//   const [data, setData] = useState([]);

//   const getProducts = async () => {
//       const response =  await fetch('https://127.0.0.1:5000/products')
//       const jsonData = await response.json()
//       setData(jsonData)
//   }
// // -------------------------------------------------> GET Products end

//   useEffect(() => {
//       getProducts()

//       if (accessToken) {
//           sessionStorage.setItem('token', accessToken.replace('?api_key=', ''));
//           setToken(accessToken.replace('?api_key=', ''));
//       }

//       if (existingToken) {
//           setToken(existingToken.replace('?api_key=',''))
//       };
      
//   }, [])




 
  return (
    <div className="app">
        <NavBar 
        token = {props.token}
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
