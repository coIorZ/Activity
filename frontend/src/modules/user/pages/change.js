import React, { Component } from 'react';
import { connect } from '98k';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Change extends Component {
  state = {
    password   : '',
    newpassword : '',
    renewpassword :'',
  }

  render() {
    const { password, newpassword, renewpassword } = this.state;

    return (
      <div className='container-fluid'>
        <Header/>
        <Menu/>
        <form className='m-5' onSubmit={this.change}>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>Password</label>
            <div className='col-3'>
              <input className='form-control' type='password' value={password} onChange={this.inputPassword}/>
            </div>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>New Password</label>
            <div className='col-3'>
              <input className='form-control' type='password' value={newpassword} onChange={this.inputNewpassword}/>
            </div>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-2 col-form-label'>Confirm New Password</label>
            <div className='col-3'>
              <input className='form-control' type='password' value={renewpassword} onChange={this.inputReNewpassword}/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-2">
              <button className="btn btn-primary" type="submit">
                Confirm
              </button>
            </div>
            <div className="col col-lg-2">
              <button className="btn btn-primary" type="reset">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }


  inputPassword = e => {
    this.setState({
      password: e.target.value,
    });
  }

  inputNewpassword = e => {
    this.setState({
      newpassword: e.target.value,
    });
  }

  inputReNewpassword = e => {
    this.setState({
      renewpassword: e.target.value,
    });
  }


  change = e => {
    e.preventDefault();
    const { password, newpassword, renewpassword } = this.state;
    if(newpassword != renewpassword) {
      return alert('New password does not match');
    }
    this.props.dispatch({
      type    : 'auth/change',
      payload : { newpassword },
    });
  }
}

export default connect()(Change);