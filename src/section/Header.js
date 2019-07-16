import React from 'react';

function Header() {
    return(

        <div id="header" className="home">

        <div className="container">
          <div className="header-content">
            <h1>Vietnam's best Craftbeer <span className="typed"></span></h1>
            <p>Brew to you</p>
    
            <ul className="list-unstyled list-social">
              <li><a href="#"><i className="ion-social-facebook"></i></a></li>
              <li><a href="#"><i className="ion-social-twitter"></i></a></li>
              <li><a href="#"><i className="ion-social-instagram"></i></a></li>
              <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
              <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
              <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

    )
}

export default Header;