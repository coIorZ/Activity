import React, { Component } from "react";
import { connect } from "98k";

import Header from "../../../components/header";
import Menu from "../../../components/menu";
import Card from "../../../components/card";
import { Link } from 'react-router-dom';

class Self extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.dispatch({
      type    : 'user/fetchUser',
      payload : userId,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.dispatch({
        type    : 'user/fetchUser',
        payload : this.props.match.params.userId,
      });
    }
  }

  render() {
    const { user } = this.props;

    return (
      <div className='container-fluid'>
        <Header />
        <Menu />
        {user ? (
          <div>
            <div className='row justify-content-center mt-5'>
              <div className='col-2'>
                <img
                  className='rounded w-100 mx-auto d-block img-thumbnail'
                  src='/Activity/assets/p3.jpeg'
                  alt='Image'
                />
              </div>
              <div className='col-3 align-self-center'>
                <div className='row'>
                  <div className='col-4'>
                    <p>User Name:</p>
                  </div>
                  <div className='col-8'>{user.username}</div>
                </div>
                <div className='row'>
                  <div className='col-4'>
                    <p>Email:</p>
                  </div>
                  <div className='col-8'>{user.email}</div>
                </div>
                <div className='row'>
                  <div className='col-4'>
                    <p>Gender:</p>
                  </div>
                  <div className='col-8'>{user.gender}</div>
                </div>
                <div className='row'>
                  <div className='col-4'>
                    <p>phone:</p>
                  </div>
                  <div className='col-8'>{user.phone}</div>
                </div>
              </div>

              <div className='col-2 align-self-center'>
                <div className='col'>
                  <Link className='btn btn-primary btn-dark btn-block' to='/update'>Update Information</Link>
                </div>
                <div className='col'>
                  <Link className='btn btn-primary btn-dark btn-block mt-5' to='/change'>Change Password</Link>
                </div>
              </div>
            </div>

            <div className='row justify-content-center'>
              <p className='h4'>My Activities</p>
            </div>
            <div className='row'>
              {user.launch.map(activity => <Card key={activity.id} activity={activity} />)}
            </div>

            <div className='row justify-content-center'>
              <p className='h4'>Favorite Activities</p>
            </div>
            <div className='row'>
              {user.like.map(activity => <Card key={activity.id} activity={activity} />)}
            </div>

            <div className='row justify-content-center'>
              <p className='h4'>Participated Activities</p>
            </div>
            <div className='row'>
              {user.attend.map(activity => <Card key={activity.id} activity={activity} />)}
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}

      </div>
    );
  }
}

export default connect(state => ({
  user    : state.user.user,
  current : state.auth.user,
}))(Self);
