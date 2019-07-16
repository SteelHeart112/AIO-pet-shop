import React, {useEffect, useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './section/Login';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Homepage from './section/Homepage';
import Products from './section/Products';



function App() {

    const [token, setToken] = useState('')
    const accessToken = (window.location.search.split("=")[0] === "?api_key") ? window.location.search.split("=")[1] : null;
    const existingToken = sessionStorage.getItem('token');

    //--------------------------------------------> GET Products API
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response =  await fetch('https://127.0.0.1:5000/products')
        const jsonData = await response.json()
        setData(jsonData)
    }
// -------------------------------------------------> GET Products end

    useEffect(() => {
        getProducts()

        if (accessToken) {
            sessionStorage.setItem('token', accessToken.replace('?api_key=', ''));
            setToken(accessToken.replace('?api_key=', ''));
        }

        if (existingToken) {
            setToken(existingToken.replace('?api_key=',''))
        };
        
    }, [])


    return (
        // <div className="App">
        <Router>
        <Switch>
        {/*########################### FUCKS HTML ############################################### */}
        {/* <Route exact path='/' component={() => <Homepage token={token} data={data} />} /> */}
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login}/>
        {/* <Route exact path='/products' component={() => <Products data={data} />} /> */}
        {/* ############################### UNcomment to fuck HTML ############################## */}
        <Route exact path='/products' component={Products} />
        </Switch>

        </Router>
        // </div>
  
    );
  }
  
  export default App;
  