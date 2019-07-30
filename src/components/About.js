import React from 'react';


function About() {
    return (
<>
        <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 ">
              <div className="div-img-bg">
                <div className="about-img">
                  <img src="css_js/images/pet-store.jpg" className="img-responsive" alt="me"/>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-descr">
                <p className="p-heading">About Us      ||</p>
                <p className="separator">Petsmart also offers free shipping on select items when your cart totals at least $49 worth of merchandise. 
                Just be sure to check products for the shipping discount message before adding them to your cart. 
                Petsmart also offers some great online conveniences for in-store pickups of items purchased on the website as well as bookings for their grooming salons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron bg" style={{backgroundImage:"url('css_js/images/buy-me.jpg')", height:'35em'}}>
        <h1 className="display-4 mt-4" style={{color:'white', fontSize:'70px', fontWeight:'bolder'}}>Find Out What We Have</h1>
        <p style={{color:'white'}}>One small step for you, a huge step toward your pet satisfaction</p>
        <p className="lead">
        <a className="btn btn-lg mt-5" variant='warning' href="/products" role="button">Let's go shopping now</a>
        </p>
      </div>
</>
    )
}

export default About;