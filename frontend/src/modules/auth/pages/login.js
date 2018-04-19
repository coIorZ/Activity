import React, { Component } from 'react';
import { connect } from '98k';
import { Redirect } from 'react-router-dom';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Login extends Component {
  state = {
    username : '',
    password : '',
  }

  render() {
    const { user } = this.props;
    const { username, password } = this.state;

    const referrer = (this.props.location.state && this.props.location.state.referrer) || '/';

    return user ? (
      <Redirect to={referrer}/>
    ) : (
      <div className='container-fluid'>
        <Header/>
        <Menu/>
        <form className='m-5' onSubmit={this.login}>
        <h4 className='form-group row justify-content-center mb-4'className='form-group row justify-content-center'>
                        Sign in
            </h4>
          <div className='form-group row justify-content-center mb-4'>
            {/* <label className='col-2 col-form-label'>Username</label> */}
            <div className='col-3'>
              <input className='form-control' placeholder='Username' value={username} onChange={this.inputUsername}/>
            </div>
          </div>
          <div className='form-group row justify-content-center mb-4'>
            {/* <label className='col-2 col-form-label'>Password</label> */}
            <div className='col-3'>
              <input className='form-control' placeholder='Password' type='password' value={password} onChange={this.inputPassword}/>
            </div>
          </div>
          <div className='row justify-content-center mb-4'>
            <button className='btn btn-primary' type='submit'>Sign in</button>
          </div>
        </form>
      </div>
    );
  }

  inputUsername = e => {
    this.setState({
      username: e.target.value,
    });
  }

  inputPassword = e => {
    this.setState({
      password: e.target.value,
    });
  }

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.dispatch({
      type    : 'auth/login',
      payload : { username, password },
    });
  }
}

export default connect(state => state.auth)(Login);
