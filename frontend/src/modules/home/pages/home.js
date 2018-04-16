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
        <img 
          src='/Activity/assets/p1.jpg'  
          alt='create activity' 
          onClick={this.createActivity}
        />
      </div>
    );
  }

  createActivity = () => {
    this.props.history.push('/create');
  }
}

export default connect()(Home);
