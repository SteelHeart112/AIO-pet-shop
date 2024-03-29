import React from 'react';
import Footer from './Footer';
import Navbar2 from './Subnav';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  signin = async e => {
    e.preventDefault();
    let send = { email: this.state.email.toLowerCase(), password: this.state.password };

    const response = await fetch('https://pet-shop-final-project.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify(send),
      headers: new Headers({
        Authorization: `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    });
    const result = await response.json();
    if (result.status === 'ok')
      return window.location.replace(
        'https://aio-pet-shop.netlify.com/?access_token=' + result.token
      );
    else if (result.status === 'fail') return alert(result.message);
  };

  handleOnChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (value !== '') {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <>
        <Navbar2 />
        <div className='App'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                <div className='card card-signin my-5'>
                  <div className='card-body'>
                    <h5 className='card-title text-center'>Sign In</h5>
                    <div className='form-label-group'>
                      <input
                        type='email'
                        id='inputEmail'
                        name='email'
                        onChange={e => this.handleOnChange(e)}
                        className='form-control'
                        placeholder='Email address'
                        required
                        autofocus
                      />
                      <label htmlFor='inputEmail'>Email address</label>
                    </div>
                    <div className='form-label-group'>
                      <input
                        type='password'
                        id='inputPassword'
                        name='password'
                        onChange={e => this.handleOnChange(e)}
                        className='form-control'
                        placeholder='Password'
                        required
                      />
                      <label htmlFor='inputPassword'>Password</label>
                    </div>
                    <div className='custom-control custom-checkbox mb-3'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customCheck1'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='customCheck1'
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className='btn btn-lg btn-primary btn-block text-uppercase'
                      onClick={e => this.signin(e)}
                    >
                      Sign in
                    </button>
                    <hr className='my-4' />
                    <a href='https://pet-shop-final-project.herokuapp.com/login/facebook'>
                      <button
                        className='btn btn-lg btn-facebook btn-block text-uppercase'
                        type='submit'
                      >
                        <i className='fab fa-facebook-f mr-2' /> Sign in with
                        Facebook
                      </button>
                    </a>
                    <a href='/register'> Not have an account yet? Sign up now! </a>
                    <form />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div />
          <Footer />
        </div>
      </>
    );
  }
}

export default Login;
