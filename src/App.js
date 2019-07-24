import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './section/Login';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom';
import Homepage from './section/Homepage';
import Products from './section/Products';
import Single_product from './section/Single_product';
import Cart from './section/Cart';

function App() {
    const [token, setToken] = useState('');
    const[currentUser, setCurrentUser] = useState({id:null})
    const [products, setProducts] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    console.log('batman ', products)

    
    const accessToken =
    window.location.search.split('=')[0] === '?api_key'
    ? window.location.search.split('=')[1]
    : null;
    const existingToken = sessionStorage.getItem('token');


    
    useEffect(() => {
        getUser()
       
        if (accessToken) {
            sessionStorage.setItem('token', accessToken.replace('?api_key=', ''));
            setToken(accessToken.replace('?api_key=', ''));
            setIsLogged(true);
        }
        if (existingToken) {
            setToken(existingToken.replace('?api_key=', ''));
            setIsLogged(true);
        }
    },[]);
    
    const getUser = async () => {
        const response = await fetch('https://127.0.0.1:5000/checklogin', {
            headers: {
              Authorization: `Token ${sessionStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
          })
          const result = await response.json()
          setCurrentUser(result)

          console.log('RESPONSE IN APP', response)
    }



    return (
        <div className="App">
            <Router>
                <Switch>
                <Route
                    exact
                    path='/'
                    render={() => <Homepage token={token} isLogged={isLogged}  />}
                />
                <Route exact path='/login' component={Login} />
                <Route exact path='/products' component={Products}/>
                {/* <Route exact path='/cart' 
                    component={(props) => {
                        return <Cart
                        {...props}
                        currentUser={currentUser}
                        products={products}
                        setProducts={setProducts}
                        />
                    }} /> */}
                <Route
                    exact
                    path='/products/:id'
                    component={(props) => {
                       return  <Single_product
                                {...props}
                                currentUser={currentUser}
                                products={products}
                            setProducts={setProducts} 
                        />
                    }}
                />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
