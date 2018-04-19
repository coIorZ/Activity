import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default (Comp, { user = 'user', pathname = '/login' } = {}) =>
  class WithAuth extends Component {
    render() {
      if(!this.props[user]) return (
        <Redirect to={{
          pathname,
          state: { referrer: this.props.location },
        }}/>
      );
      return <Comp {...this.props}/>;
    }
  };
