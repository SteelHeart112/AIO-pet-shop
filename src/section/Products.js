import React, {useState, useEffect} from 'react';
import journal_card from '../components/journal_card';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import styled from 'styled-components';
import Navbar2 from './navbar2';


function Products() {
    // console.log('PRODUCTS', props)

    const [data, setData] = useState([]);
    const [inCart, setCart] = useState(false);


    const addToCart = () => {
        console.log('GET product id', data)
        // setCart(inCart);
    }
    
    const getProducts = () => {
        fetch('https://127.0.0.1:5000/products')
        .then(res => res.json())
        .then(info => {
            console.log('$$$$$$$', info)
            setData(info)
        });
    };
    console.log('DTATDTA', data) 
    
    useEffect(() => {
        getProducts(setData);
    }, [])


        return (
<>      
<Navbar2 />

        <div className="jumbotron bg" style={{backgroundImage:"url('css_js/images/about-us3.jpg')", height:'35em'}}>
            <h1 className="display-4 mt-4" style={{color:'white', fontSize:'70px', fontWeight:'bolder'}}>Products</h1>
            <p style={{color:'white'}}>Purchase our delicious beers!</p>
            <p className="lead">
            <a className="btn btn-lg mt-5" variant='warning' href="#" role="button">Purchase now</a>
            </p>
         </div>


        <div id="journal" className="text-left paddsection">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Choose a package</h2>
                </div>
            </div>
        </div>

        <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
            {data.map(({name,img,price, product_id}) => {
                        return (
        <div className='card'>
          <div
            className='img-container pg-5'
            onClick={console.log('you clicked me')}
          >
            <Link to={`/products/${product_id}`}>
              <img
                src={img}
                alt='product'
                className='card-img-top'
              />
            </Link>
            <button
              className='cart-btn'
              disabled={inCart ? true : false}

//  ################################### have to get id from array ####################################################################
              
              onClick={() => console.log('FIRE')} >  
              {inCart ? (
                <p className='text-capitialized mb-0' disabled>
                  {' '}
                  in Cart
                </p>
              ) : (
                <i className='fa fa-cart-plus'/>
              )}
            </button>
          </div>
          {/* card footer */}
          <div className='card-footer d-flex justfiy-content-between'>
              <p className='align-self-center mb-0'>
                  {name}
              </p>
              <h5 className='text-yellow font-italic mb-0'>
                <span className='mr-1'>$</span>
                {price}
              </h5>
          </div>
        </div>
              )
            })}
      </ProductWrapper>
            <Footer />

    </>
 )
 }

export default Products;
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear;
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px5px 0px rgba((0,0,0,0.2));
    }
    .card-footer{
        background: rgba(247,247,2470);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%)
    transition: all 1s linear;
}
.img-container:hover .cart-btn {
    transform: translate(0, 0);
}
.cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}
`;

