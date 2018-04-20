import React, { Component } from 'react';
import { connect } from '98k';

import Header from '../../../components/header';
import Menu from '../../../components/menu';
import Project from '../components/project';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'home/fetchHome',
    });
  }

  render() {
    const { activities } = this.props;

    return (
      <div className='container-fluid'>
        <Header />
        <Menu />
        {activities ? (
          <div className=''>
            <Project label='Music' activities={activities.filter(a => a.category == 'music')} to='/c/music' />
            <Project label='Lecture' activities={activities.filter(a => a.category == 'lecture')} to='/c/lecture' />
            <Project label='Party' activities={activities.filter(a => a.category == 'party')} to='/c/party' />
            <Project label='Movie' activities={activities.filter(a => a.category == 'movie')} to='/c/movie' />
            <Project label='Exhibition' activities={activities.filter(a => a.category == 'exhibition')} to='/c/exhibition' />
            <Project label='Sport' activities={activities.filter(a => a.category == 'sport')} to='/c/sport' />
            <Project label='Travel' activities={activities.filter(a => a.category == 'travel')} to='/c/travel' />
            <Project label='Others' activities={activities.filter(a => a.category == 'others')} to='/c/others' />
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }

  createActivity = () => {
    this.props.history.push('/create');
  }
}

export default connect(state => state.home)(Home);
