import React, { Component } from "react";
import { connect } from "98k";

import Header from "../../../components/header";
import Menu from "../../../components/menu";

class Update extends Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };

  componentDidMount() {
    const { name, phone, email } = this.props.user;
    this.setState({
      name,
      phone,
      email
    });
  }

  render() {
    const { name, phone, email } = this.state;

    return (
      <div className="container-fluid">
        <Header />
        <Menu />
        <form className="m-5" onSubmit={this.update}>
          <div className='form-group row justify-content-center mb-5'>
            <h4>Update Information</h4>
          </div>
          <div className="form-group row justify-content-center">
            <label className="col-1 col-form-label">Username</label>
            <div className="col-3">
              <input
                className="form-control"
                value={name}
                onChange={this.inputName}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label className="col-1 col-form-label">Phone</label>
            <div className="col-3">
              <input
                className="form-control"
                value={phone}
                onChange={this.inputPhone}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label className="col-1 col-form-label">Email</label>
            <div className="col-3">
              <input
                className="form-control"
                value={email}
                onChange={this.inputEmail}
              />
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col col-lg-2 text-center">
              <button className="btn btn-dark btn-primary" type="submit">
                Confirm
              </button>
            </div>
            <div className="col col-lg-2 text-center">
              <button className="btn btn-dark btn-primary" type="reset">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  inputName = e => {
    this.setState({
      name: e.target.value
    });
  };
  inputPhone = e => {
    this.setState({
      phone: e.target.value
    });
  };
  inputEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  update = e => {
    e.preventDefault();
    const { name, phone, email } = this.state;
    this.props.dispatch({
      type: "auth/update",
      payload: { name, phone, email }
    });
  };
}

export default connect(state => state.user)(Update);
