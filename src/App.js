import React, { useEffect, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct'
import Profile from './components/UserProfile'
import ProductDetails from './components/ProductDetails';
import SortCategory from './components/SortByCategory';

function App() {
    const [token, setToken] = useState('');
    const[currentUser, setCurrentUser] = useState({id:null})
    const [products, setProducts] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    console.log('products ', products)

    const accessToken =
    window.location.search.split('=')[0] === '?access_token'
    ? window.location.search.split('=')[1]
    : null;
    const existingToken = localStorage.getItem('token');
    
    const getUser = async () => {
        const response = await fetch('https://pet-shop-final-project.herokuapp.com/profile', {
            headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
          })
          const result = await response.json()
          setCurrentUser(result)
    }
    console.log("token", token)

    useEffect(() => {
        getUser()
        if (accessToken) {
            localStorage.setItem('token', accessToken.replace('?access_token=', ''));
            setToken(accessToken.replace('?access_token=', ''));
            setIsLogged(true);
        }
        if (existingToken) {
            setToken(existingToken.replace('?access_token=', ''));
            setIsLogged(true);
        }
    },[]);

    return (
        <div className="App">
            <Router>
                <Switch>
                <Route exact path='/' 
                render={() => <Homepage token={token} isLogged={isLogged} />}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/products' 
                render={() => <Products isLogged={isLogged} />}/>
                <Route exact path="/createproduct" component = {CreateProduct}/>
                <Route exact path='/profile' 
                render={() => <Profile isLogged={isLogged} />}/>
                <Route exact path='/products/:id' 
                component={(props) => { return <ProductDetails
                                {...props}
                                currentUser={currentUser}
                                products={products}
                                isLogged={isLogged}
                        />
                    }}/>
                <Route exact path='/category/:category' 
                component={(props) => { return <SortCategory
                                {...props}
                                currentUser={currentUser}
                                products={products}
                                isLogged={isLogged}
                        />
                    }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;