import React, { Component } from 'react';
import { connect } from '98k';

import Header from '../components/header';
import Menu from '../components/menu';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header/>
        <Menu/>
      </div>
    );
  }
}

export default connect()(Home);
