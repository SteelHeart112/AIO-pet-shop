import React from 'react';
import journal_card from '../components/journal_card';
import Footer from './Footer';

function Products(props) {
    console.log('PRODUCTS', props)
        return (
<>      
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
{/*          
             <div className="container">
                <div className="journal-block">
                {props.data.map(({name, img, description, price}) =>{
                        return (
                    <div className="row">
                        {name}
                        <img src={img} className="card-img-top" alt="..."/>
                        {journal_card(journal_info.journal2)}
                        {journal_card(journal_info.journal3)}
                    </div>
                     )
                    })}
                </div>
            </div> */}

            {/* <div className="card-group container">
                <div className='d-flex flex-wrap'>
                    {props.data.map(({name, img, description, price}) =>{
                        return (
                    <div style={{width: '20rem'}} className='m-5'>
                    <img src={img} className="card-img-top" alt="..."/>    
                    <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{price}</small>
                    </div>
                    </div>
                    )
                    })}
                </div>
            </div>  */}
            <Footer />



    </>
 )
 }

export default Products;


const journal_info = {
    journal1: {
        img_url:'css_js/images/journal-local.jpg',
        title:'Starter pack 1',
        body:<a className="btn btn-lg mt-5" variant='warning' href="#" role="button">Purchase now</a>
    } ,
    journal2:{
        img_url:'css_js/images/journal-beer.jpg',
        title:'Starter pack 2',
        body:<a className="btn btn-lg mt-5" variant='warning' href="#" role="button">Purchase now</a>
    },
    journal3: {
        img_url:'css_js/images/journal-ingredients.jpg',
        title:'Starter pack 3',
        body:<a className="btn btn-lg mt-5" variant='warning' href="#" role="button">Purchase now</a>
    }
}

