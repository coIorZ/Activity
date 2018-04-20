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
      <div className='container-fluid' style={{ backgroundImage: "url(/Activity/assets/timg.jpeg)", height: "100vh" }}>
        <Header />
        <Menu />
        <form className='row justify-content-center text-center' onSubmit={this.update} style={{ marginTop: "120px" }}>
          <div className='card mt-5 mb-4 col-4' style={{ backgroundColor: "rgba(255,255,255,.6)" }}>  
            <div className='form-group row justify-content-center mb-4 mt-3'>
              <h4>Update Information</h4>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-4 col-form-label'>Name</label>
              <div className='col-8'>
                <input
                  className='form-control'
                  value={name}
                  onChange={this.inputName}
                />
              </div>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-4 col-form-label'>Phone</label>
              <div className='col-8'>
                <input
                  className='form-control'
                  value={phone}
                  onChange={this.inputPhone}
                />
              </div>
            </div>


            <div className='row justify-content-center mb-4'>
              <button className='btn col btn-primary btn-dark mt-2 ml-3 mr-3' type='submit'>
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
