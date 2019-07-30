import React from 'react';
import { Nav, Button } from 'react-bootstrap';


const NavBar = ( {isLogged} ) => {
  const clearBEToken = async () => {
    fetch('https://127.0.0.1:5000/logout', {
      method: 'get',
      headers: new Headers({
        Authorization: `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    });
  };
  
  const cleartoken = e => {
    e.preventDefault();
    clearBEToken();
    localStorage.clear('token');
    window.location.replace('http://localhost:3000/');
  };

  return (
    <nav id='main-nav'>
      <div className='row'>
        <div className='container'>
          <div className='logo'>
            <a href='/'>
              <img src='css_js/images/logo1.png' alt='logo' />
            </a>
          </div>
          <div className='responsive'>
            <i data-icon='m' className='ion-navicon-round' />
          </div>
          <ul className='nav-menu list-unstyled'>
            <li>
              <a href='/products' className='smoothScroll'>
                Products
              </a>
            </li>
            <li>
              <a href='#about' className='smoothScroll'>
                About
              </a>
            </li>
              {!isLogged && 
               <li>
               <Nav.Link
                 href='/login'
                 className='smoothScroll'
                 style={{ padding: 0 }}
               >
                 Login
               </Nav.Link>
             </li>
              }
              {!isLogged && 
               <li>
               <Nav.Link
                 href='/register'
                 className='smoothScroll'
                 style={{ padding: 0 }}
               >
                 Sign up
               </Nav.Link>
             </li>
              }              
            {isLogged &&
            <li>
              <Nav.Link
                onClick={e => cleartoken(e)}
                className='smoothScroll'
                style={{ padding: 0 }}
              >
                Logout
              </Nav.Link>
            </li>
            }
              {isLogged && 
               <li>
               <Nav.Link
                 href='/createproduct'
                 className='smoothScroll'
                 style={{ padding: 0 }}
               >
                 Create Product
               </Nav.Link>
             </li>
              }
                {isLogged && 
               <li>
               <Nav.Link
                 href='/profile'
                 className='smoothScroll'
                 style={{ padding: 0 }}
               >
                 Profile
               </Nav.Link>
             </li>
              }
            {isLogged &&
            <li>
              <Nav.Link
              className='smoothScroll'
              style={{ padding: 0 }}
              >
              <Button>
              <span className='mr-2'>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              </Button>
              </Nav.Link>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
