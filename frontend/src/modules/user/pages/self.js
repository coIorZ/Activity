import React, { Component } from "react";
import { connect } from "98k";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import Card from "../../category/components/activity";

class Self extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <div className="container-fluid">
        <Header />
        <Menu />
        <div className="row justify-content-center">
          <div className="col-2">
            <img
              className="rounded w-100 mx-auto d-block img-thumbnail"
              src="/Activity/assets/p3.jpeg"
              alt="Image"
            />
          </div>
          <div className="col-3 align-self-center">
            <div className="row">
              <div className="col-4">
                <p>User Name:</p>
              </div>
              <div className="col-8">{user.name}</div>
            </div>
            <div className="row">
              <div className="col-4">
                <p>Email:</p>
              </div>
              <div className="col-8">{user.email}</div>
            </div>
            <div className="row">
              <div className="col-4">
                <p>Gender:</p>
              </div>
              <div className="col-8">{user.gender}</div>
            </div>
            <div className="row">
              <div className="col-4">
                <p>location:</p>
              </div>
              <div className="col-8">{user.location}</div>
            </div>
          </div>
          <div className="col-2 align-self-center">
            <div className="col">
              <button
                type="button"
                id="btn_updateInfo"
                className="btn btn-primary btn-block"
                onClick={this.updateActivity}
              >
                Update Information
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                id="btn_changePassword"
                className="btn btn-primary btn-block mt-5"
                onClick={this.changeActivity}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <p className="h2">Favorite Activities</p>
        </div>
        <div className="row">
          {user.likes.map(activity => <Card activity={activity} />)}
        </div>

        <div className="row">
          <p className="h2">Participated Activities</p>
        </div>
        <div className="row">
          {user.history.map(activity => <Card activity={activity} />)}
        </div>
      </div>
    );
  }
  updateActivity = () => { 
    var newPassword=prompt("Enter new password "); // 弹出input框  
  }
  
  changeActivity = () => {
    alert('bbb')
  }
}


export default connect(state => state.user)(Self);
