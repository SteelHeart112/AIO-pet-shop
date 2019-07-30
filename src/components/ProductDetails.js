import React from 'react';
import Footer from './Footer';
import {
  Link
} from 'react-router-dom';
import SubNav from './Subnav';
import { Button } from 'react-bootstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
 }

  componentDidMount() {
    this.getSingleProduct_id(this.props.match.params.id);
  }

  getSingleProduct_id = id => {
    fetch(`https://pet-shop-final-project.herokuapp.com/product/${id}`)
      .then(res => res.json())
      .then(product_details => {
        this.setState({
          details: product_details
        });
      });
    };

  render() {
    return (
      <>
        <SubNav />
        <div className='container py-5'>
          <div className='row'>
            <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
              <h1>{this.state.details.name}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3 text capitalized'>
              <img
                src={this.state.details.imageUrl}
                className='img=fluid'
                alt='product'
              />
            </div>
            <div className='col-10 mx-auto col-md-6 my-3 text capitalized'>
              <h1> Subscription: {this.state.details.name}</h1>
              <strong>
                {' '}
                price: <span>$</span>
                {this.state.details.price}
              </strong>
              <h4>Some info:</h4>
              <p>
              {this.state.details.description}
              </p>
              <div>
                <Link to='/products'>
                  <Button>back to products</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default ProductDetails;
