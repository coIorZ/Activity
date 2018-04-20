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

    return user ? <Redirect to={referrer} /> : <div className="container-fluid" style={{ backgroundImage: "url(/Activity/assets/timg.jpeg)", height: "100vh" }}>
        <Header />
        <Menu />
        <form className="row justify-content-center text-center" onSubmit={this.login} style={{ marginTop: "120px" }}>
          <div className='card mt-5 mb-5 col-4'  style={{ backgroundColor:"rgba(255,255,255,.6)" }}>
            <h4 className="form-group row justify-content-center mb-5 mt-3">
              Sign in
            </h4>
            <div className="form-group row justify-content-center mb-4">
              <div className="col">
                <input className="form-control" placeholder="Username" value={username} onChange={this.inputUsername} />
              </div>
            </div>
            <div className="form-group row justify-content-center mb-4 mt-1">
              <div className="col">
                <input className="form-control" placeholder="Password" type="password" value={password} onChange={this.inputPassword} />
              </div>
            </div>
            <div className="row justify-content-center mb-4">
              <button className="btn col btn-primary btn-dark ml-3 mr-3" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>;
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
