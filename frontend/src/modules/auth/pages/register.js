import React, { Component } from "react";
import { connect } from "98k";

import Header from "../../../components/header";
import Menu from "../../../components/menu";

class Register extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    repassword: "",
    gender: "m",
    phone: ""
  };

  render() {
    const { name, username, password, repassword, gender, phone } = this.state;

    return (
      <div className="container-fluid" style={{ backgroundImage: "url(/Activity/assets/timg.jpeg)", height: "100vh" }}>
        <Header />
        <Menu />
        <form
          className="row justify-content-center text-center"
          onSubmit={this.register}
          //style={{ marginTop: "100px" }}
        >
          <div className="card mt-5 mb-4 col-5" style={{ backgroundColor:"rgba(255,255,255,.6)" }}>
            <div className="form-group row justify-content-center mb-4 mt-3">
              <h4>Register</h4>
            </div>
            <div className="form-group row justify-content-center">
              <label className="col-3 col-form-label">Nickname</label>
              <div className="col-8">
                <input
                  className="form-control"
                  value={name}
                  onChange={this.inputName}
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label className="col-3 col-form-label">Username</label>
              <div className="col-8">
                <input
                  className="form-control"
                  value={username}
                  onChange={this.inputUsername}
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label className="col-3 col-form-label">Password</label>
              <div className="col-8">
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={this.inputPassword}
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label className="col-3 col-form-label">Password</label>
              <div className="col-8">
                <input
                  className="form-control"
                  type="password"
                  value={repassword}
                  onChange={this.inputRepassword}
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label className="col-3 col-form-label">Phone</label>
              <div className="col-8">
                <input
                  className="form-control"
                  value={phone}
                  onChange={this.inputPhone}
                />
              </div>
            </div>
            <div className="form-group row justify-content-center align-items-center">
              <label className="col-3 col-form-label">Gender</label>
              <div className="col-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="m"
                    checked={gender == "m"}
                    onChange={this.inputGender}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="f"
                    checked={gender == "f"}
                    onChange={this.inputGender}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-4">
            	  <button className="btn col-10 btn-primary btn-dark" type="submit">
                Register
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

  inputUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  inputPassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  inputRepassword = e => {
    this.setState({
      repassword: e.target.value
    });
  };

  inputPhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  inputGender = e => {
    this.setState({
      gender: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    const { name, username, password, repassword, gender, phone } = this.state;
    if (password != repassword) {
      return alert("password does not match");
    }
    this.props.dispatch({
      type: "auth/register",
      payload: { name, username, password, gender, phone }
    });
  };
}

export default connect()(Register);
