import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import NavBar from './Navbar';
import SubNav from './Subnav';
import { Card, CardGroup } from 'react-bootstrap';

class SortCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
 }

  componentDidMount() {
    this.getSingleCategory(this.props.match.params.category);
  }

  getSingleCategory = cate => {
    fetch(`https://127.0.0.1:5000/category/${cate}`)
      .then(res => res.json())
      .then(product_category => {
        this.setState({
          details: product_category
        });
      });
    };

  render() {
    return (
<>      
<NavBar isLogged={this.props.isLogged}/>
<SubNav />
<div id="journal" className="text-left paddsection">
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="portfolio-list">
                        <ul className="nav list-unstyled" id="portfolio-flters">
                        <Link to={`/products`}><button >All</button></Link>
                        <Link to={`/category/Foods`}><button>Foods</button></Link>
                        <Link to={`/category/Toys`}><button>Toys</button></Link>
                        <Link to={`/category/Walk-Ropes`}><button>Walk Ropes</button></Link>
                        <Link to={`/category/Utensils`}><button>Utensils</button></Link>
                        <Link to={`/category/Training`}><button>Training</button></Link>
                        <Link to={`/category/Beds-Mattresses-Cat-Trees`}><button>Beds/ Mattresses/ Cat Trees</button></Link>
                        <Link to={`/category/Cages-Bags-Fences`}><button>Cages/ Bags/ Fences</button></Link>
                        <Link to={`/category/Cosmetics`}><button>Cosmetics</button></Link>
                        <Link to={`/category/Costumes`}><button>Costumes</button></Link>
                        <Link to={`/category/Grooming-Tools`}><button>Grooming Tools</button></Link>
                        <Link to={`/category/Heath-Cares-Cat-Sands`}><button >Heath Cares/ Cat Sands</button></Link>
                        <Link to={`/category/Walk-Your-Pet`}><button >Walk your pet</button></Link>
                        <Link to={`/category/Grooming-Services`}><button >Grooming Services</button></Link>
                        <Link to={`/category/Pet-Hotels`}><button >Pet Hotels</button></Link>
                        <Link to={`/category/Matchmaking-Services`}><button >Matchmaking Services</button></Link>
                        <Link to={`/category/Training-For-Pet`}><button >Training For Pet</button></Link>
                        <Link to={`/category/Carrer-Courses`}><button >Carrer Courses</button></Link>
                        <Link to={`/category/Puppies`}><button >Puppies</button></Link>
                        <Link to={`/category/Kittens`}><button >Kittens</button></Link>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
        <CardGroup>
        {this.state.details.map(({name,imageUrl,price,id,description}) => {
                        return (
                          <div className="col-lg-2 col-md-4">
        <Card>
            <Link to={`/products/${id}`}>
            <Card.Img variant="top" src={imageUrl} alt='product'/>
            </Link>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{price}<span className='mr-1'>$</span></small>
            </Card.Footer>
            </Card>
        </div>
                        )})}
        </CardGroup>
        </div>
        </div>
            <Footer />

    </>
 )
 }
}

export default SortCategory;


