import React, { Component } from "react";
import { connect } from "98k";

import withAuth from '../../../lib/withAuth';
import Header from "../../../components/header";
import Menu from "../../../components/menu";

class Update extends Component {
  state = {
    name  : "",
    phone : "",
  };

  componentDidMount() {
    const { name, phone } = this.props.user;
    this.setState({
      name,
      phone,
    });
  }

  render() {
    const { name, phone } = this.state;

    return (
      <div className='container-fluid'>
        <Header />
        <Menu />
        <form className='m-5' onSubmit={this.update}>
          <div className='form-group row justify-content-center mb-5'>
            <h4>Update Information</h4>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-1 col-form-label'>Username</label>
            <div className='col-3'>
              <input
                className='form-control'
                value={name}
                onChange={this.inputName}
              />
            </div>
          </div>
          <div className='form-group row justify-content-center'>
            <label className='col-1 col-form-label'>Phone</label>
            <div className='col-3'>
              <input
                className='form-control'
                value={phone}
                onChange={this.inputPhone}
              />
            </div>
          </div>

          <div className='row justify-content-center mt-5'>
            <div className='col col-lg-2 text-center'>
              <button className='btn btn-dark btn-primary' type='submit'>
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  inputName = e => {
    this.setState({
      name: e.target.value,
    });
  };
  inputPhone = e => {
    this.setState({
      phone: e.target.value,
    });
  };

  update = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.props.dispatch({
      type    : "user/updateParticle",
      payload : { id: this.props.user.id, name, phone },
    });
  };
}

export default connect(state => ({
  user: state.auth.user,
}))(withAuth(Update));
