import React, { useEffect, useState } from 'react';
import Products from './Products';
import Footer from './Footer';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
import Navbar2 from '../section/navbar2';

function SingleProduct(props) {
    // console.log('WHERE THE FUCK AREA THESE COMING FROM', props)
  const [product_id, setProduct_id] = useState({});
  const [count, setCount] = useState(0);
  const [inCart, setCart] = useState(false);
  const [addInCart, setInCart] = useState([]);

const addToCart = () => {
  console.log('PRODUCTSSSSS', product_id)
  setInCart({...add}) 


}
    
  const getSingleProduct_id = mum => {
    fetch(`https://127.0.0.1:5000/product/${mum}`)
      .then(res => res.json())
      .then(data => {
        setProduct_id(data);
      });
  };
//   console.log('WORKWORKWORK', product_id);

  useEffect(() => {
    getSingleProduct_id(props.match.params.id);
  }, []);

  return (
    <>
    <Navbar2 />
    <div className='container py-5'>
        {/* title */}
        <div className='row'>
            <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                <h1>{product_id.name}</h1>
            </div>
        </div>
        {/* end title */}
        <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3 text capitalized'>
                <img src={product_id.img} className='img=fluid' alt='product'/>
            </div>
            {/* product text */}
            <div className='col-10 mx-auto col-md-6 my-3 text capitalized'>
            <h1> Subscription: {product_id.name}</h1>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
            </h4>
            <strong> price: <span>$</span>
            {product_id.price}
            </strong>
            <h4>Some info:</h4>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.
The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
            {/* buttons */}
            <div>
            <Link to='/products'>
                <ButtonContainer>
                    back to products
                </ButtonContainer>
            </Link>
            <ButtonContainer
            // disabled={inCart?true:false}
            onClick={(props)=>{addToCart(props.product_id)}}>
                {inCart?'inCart':'add to cart'}
            </ButtonContainer>
            </div>
            {/* {inCart.product_id.price} */}
            </div>
        </div>
    </div>y


  
      <Footer />
    </>
  );
}

export default SingleProduct;

