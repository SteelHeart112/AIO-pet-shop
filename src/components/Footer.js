import React from 'react';


function Footer() {
    return (
        <div id="footer" className="text-center navbar-fixed-bottom mt-auto">
        <div className="container">
          <div>
          <a href="https://aio-pet-shop.netlify.com/"><img src="/css_js/images/logo1.png" alt="logo" style={{ width: '15%', paddingBottom: '2em'}}/></a>
          </div>
          <div className="socials-media text-center">
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/"><i className="ion-social-facebook"></i></a></li>
              <li><a href="https://twitter.com/"><i className="ion-social-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="ion-social-instagram"></i></a></li>
              <li><a href="https://www.tumblr.com/"><i className="ion-social-tumblr"></i></a></li>
              <li><a href="https://dribbble.com/"><i className="ion-social-dribbble"></i></a></li>
            </ul>
          </div>
          <p>&copy; Copyrights Folio. All rights reserved.</p>
          <div className="credits">
            Created by Harold Nguyen with the help of Yosemite Team
          </div>
        </div>
      </div>
    )
}

export default Footer;