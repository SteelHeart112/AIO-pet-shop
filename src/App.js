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
    const accessToken =
        window.location.search.split('=')[0] === '?api_key'
        ? window.location.search.split('=')[1]
        : null;
    const existingToken = sessionStorage.getItem('token');


    useEffect(() => {
    
        if (accessToken) {
            sessionStorage.setItem('token', accessToken.replace('?api_key=', ''));
            setToken(accessToken.replace('?api_key=', ''));
        }

        if (existingToken) {
            setToken(existingToken.replace('?api_key=', ''));
        }
        }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                <Route
                    exact
                    path='/'
                    render={() => <Homepage token={token} />}
                />
                <Route exact path='/login' component={Login} />
                <Route exact path='/products' component={Products}/>
                <Route exact path='/cart' component={Cart} />
                <Route
                    exact
                    path='/products/:id'
                    component={Single_product}
                />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
