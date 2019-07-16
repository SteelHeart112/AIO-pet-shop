import React from 'react';
import portfolio_card from '../components/portfolio_card';

function Portfolio() {
    return (
      
        <div id="portfolio" className="text-center paddsection">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Products</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="portfolio-list">
                        <ul className="nav list-unstyled" id="portfolio-flters">
                        <li className="filter filter-active" data-filter=".all">Beer</li>
                        <li className="filter" data-filter=".branding">Beer</li>
                        <li className="filter" data-filter=".mockups">Beer</li>
                        <li className="filter" data-filter=".uikits">Beer</li>
                        <li className="filter" data-filter=".webdesign">Beer</li>
                        <li className="filter" data-filter=".photography">Beer</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-container">

                {portfolio_pic.map(portfolio => {
                    return portfolio_card(portfolio)})
                    }

                {/* {portfolio_card(portfolio_pic.pic2)}
                {portfolio_card(portfolio_pic.pic3)}
                {portfolio_card(portfolio_pic.pic4)}
                {portfolio_card(portfolio_pic.pic5)}
                {portfolio_card(portfolio_pic.pic6)} */}

            </div>
        </div>
        
    )
}

export default Portfolio;

// const portfolio_pic = {
//     pic1: {
//         class:'col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign',
//         img:'css_js/images/about-us.jpg'
//     } ,
//     pic2: {
//         class:'col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography',
//         img:'css_js/images/about-us.jpg'
//     } ,
//     pic3: {
//         class:'col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig photographyn',
//         img:'css_js/images/about-us.jpg'
//     } ,
//     pic4: {
//         class:'col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign photography',
//         img:'css_js/images/about-us.jpg'
//     } ,
//     pic5: {
//         class:'col-lg-4 col-md-6 portfolio-thumbnail all branding uikits photography',
//         img:'css_js/images/about-us.jpg'
//     } ,
//     pic6: {
//         class:'col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits webdesign',
//         img:'css_js/images/about-us.jpg'
//     } 

// }   

const portfolio_pic = [
     {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign',
        img:'css_js/images/about-us.jpg'
    } ,
     {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography',
        img:'css_js/images/about-us.jpg'
    } ,
     {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig photographyn',
        img:'css_js/images/about-us.jpg'
    } ,
   {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign photography',
        img:'css_js/images/about-us.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all branding uikits photography',
        img:'css_js/images/about-us.jpg'
    } ,
     {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits webdesign',
        img:'css_js/images/about-us.jpg'
    } 

]