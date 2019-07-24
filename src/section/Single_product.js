import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
import NavBar from '../components/navbar';


class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: {},
      inCart: false,
      modal: false,
      text: '',
      products: this.props.products
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    this.getSingleProduct_id(this.props.match.params.id);
  }

  getSingleProduct_id = mum => {
    fetch(`https://127.0.0.1:5000/product/${mum}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product_id: data
        });
      });
    console.log('get single', this.state, this.state.product_id);
  };

  getUserOrder = async () => {
    const response = await fetch('https://127.0.0.1:5000/getorder', {
      headers: {
        Authorization: `Token ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
      this.setState({
        userOrders: data,
        modal: true
      });
    console.log('CURRENT USER ORDERS', this.state.userOrders)
  }

  testButton = () => {
    console.log('FIRE')
  }
  deleteOrder = async (id) => {
    const response = await fetch(`https://127.0.0.1:5000/deleteorder/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    console.log('RESPONSE', response)
    const json = await response.json()
    this.setState({
      data: json.results
    });
    console.log('DELETE ORDER', this.data)

  }

  addToCart = async () => {
    if (this.props.currentUser.id === null) {
      window.location.replace('http://127.0.0.1:3000/login');
    }
    if (this.props.currentUser.id !== null) {
      let localSetProduct = this.props.products.concat(this.state.product_id);
      console.log('add to ccrt function', localSetProduct);
      // this.props.setProducts(localSetProduct);

      const response = await fetch('https://127.0.0.1:5000/addtocart', {
        headers: {
          Authorization: `Token ${sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ objectForData: localSetProduct })
      });
      // this.toggle()
      this.getUserOrder()
    }
  };


  render() {
    // if (this.state.userOrders) {
    // console.log('sadsdadas', this.state.userOrders.reduce((totalPrice, order) => totalPrice + order.price, 0))
    // }
    return (
      <>
      <NavBar />
        <div className='container py-5'>
          <div className='row'>
            <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
              <h1>{this.state.product_id.name}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3 text capitalized'>
              <img
                src={this.state.product_id.img}
                className='img=fluid'
                alt='product'
              />
            </div>
            <div className='col-10 mx-auto col-md-6 my-3 text capitalized'>
              <h1> Subscription: {this.state.product_id.name}</h1>
              <h4 className='text-title text-uppercase text-muted mt-3 mb-2' />
              <strong>
                {' '}
                price: <span>$</span>
                {this.state.product_id.price}
              </strong>
              <h4>Some info:</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                without relying on meaningful content (also called greeking).
                Replacing the actual content with placeholder text allows
                designers to design the form of the content before the content
                itself has been produced. The lorem ipsum text is typically a
                scrambled section of De finibus bonorum et malorum, a
                1st-century BC Latin text by Cicero, with words altered, added,
                and removed to make it nonsensical, improper Latin.
              </p>
              <div>
                <Link to='/products'>
                  <ButtonContainer>back to products</ButtonContainer>
                </Link>
                <Button onClick={() => this.addToCart()}>
                  {this.state.inCart ? 'inCart' : 'add to cart'}
                </Button>
              </div>
            </div>
            {this.state.modal &&
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Cart</ModalHeader>
             
              <ModalBody>
              
              {this.state.userOrders.map(({name, price,}) =>{
                return (
                  <div className='container' style={{display:'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <div>
                      <h3>
                        {name}
                      </h3>
                    </div>
                    <div>
                      <p>
                        $:{price}
                      </p>
                    </div>
                    <div>
                      <button onClick={e=> this.deleteOrder(e)}>Delete</button>
                    </div>
                    </div>
                    )
                  })}
                    </ModalBody>
                    <div>
                      <h3>
                        Total:$
                        {this.state.userOrders && <span>{this.state.userOrders.reduce((totalPrice, order) => totalPrice + order.price, 0)}</span>}
                      </h3>
                    </div>
              <ModalFooter>
                <Button color='primary' onClick={this.toggle}>
                  Do Something
                </Button>{' '}
                <Button color='secondary' onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
        }
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default SingleProduct;
