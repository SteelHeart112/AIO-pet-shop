import React from 'react';


function Footer() {
    return (

        <div id="footer" className="text-center navbar-fixed-bottom">
        <div className="container">
          <div>
          <a href="/"><img src="css_js/images/logo1.png" alt="logo" style={{ width: '15%', paddingBottom: '2em'}}/></a>
          </div>
          <div className="socials-media text-center">
         
            <ul className="list-unstyled">
              <li><a href="#"><i className="ion-social-facebook"></i></a></li>
              <li><a href="#"><i className="ion-social-twitter"></i></a></li>
              <li><a href="#"><i className="ion-social-instagram"></i></a></li>
              <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
              <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
              <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
            </ul>
    
          </div>
    
          <p>&copy; Copyrights Folio. All rights reserved.</p>
    
          <div className="credits">
    
            Designed by Ray Romero with help of <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
    
        </div>
      </div>
    )
}

export default Footer;