import React, { Component } from "react";
import { connect } from "98k";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    term: "",
  };

  render() {
    const { user } = this.props;
    const { term } = this.state;

    return (
      <div className='bg-light navbar navbar-expand-lg navbar-light row'>
        <div className='col-2'>
          <Link to='/'>
            <img
              style={{ height: 60 }}
              src='/Activity/assets/7108c7bdb9210263b625c13f8503bf2d.png'
            />
          </Link>
        </div>
        <form className='col-4 offset-2' onSubmit={this.submit}>
          <input
            className='form-control'
            Placeholder='search activities here'
            value={term}
            onChange={this.change}
          />
        </form>
        <div className='col-2 text-right h6'>
          {user ? (
            <Link to={`/u/${user.id}`}>{user.name}</Link>
          ) : (
            <span>
              <Link to={{
                pathname : '/register',
                state    : { referrer: this.props.location },
              }}>Register</Link> / <Link to={{
                pathname : '/login',
                state    : { referrer: this.props.location },
              }}>Sign in</Link>
            </span>
          )}
        </div>
        <div className='col-2 text-right'>
          <Link className='btn btn-dark' to='/create'>Activity initiation</Link>
        </div>
      </div>
    );
  }

  change = e => {
    this.setState({
      term: e.target.value,
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.term}`);
  };
}

export default connect(state => ({
  user: state.auth.user,
}))(withRouter(Header));
