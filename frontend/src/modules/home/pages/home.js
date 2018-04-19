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
          <div className="row">
            <div className='col-10 row'>
              <Project label='Music' activities={activities.filter(a => a.category == 'music')} more='/c/music' />
              <Project label='Lecture' activities={activities.filter(a => a.category == 'lecture')} more='/c/lecture' />
              <Project label='Party' activities={activities.filter(a => a.category == 'party')} more='/c/party' />
              <Project label='Movie' activities={activities.filter(a => a.category == 'movie')} more='/c/movie' />
              <Project label='Exhibition' activities={activities.filter(a => a.category == 'exhibition')} more='/c/exhibition' />
              <Project label='Sport' activities={activities.filter(a => a.category == 'sport')} more='/c/sport' />
              <Project label='Travel' activities={activities.filter(a => a.category == 'travel')} more='/c/travel' />
              <Project label='Others' activities={activities.filter(a => a.category == 'others')} more='/c/others' />
            </div>
            <div className="col-2 mt-2">
              <img
                className='w-100'
                src='/Activity/assets/p1.jpg'
                alt='create activity'
                onClick={this.createActivity}
              />
            </div>
          </div>
        ) : (
            <div>loading...</div>
          )}
      </div>
    )
  }

  createActivity = () => {
    this.props.history.push('/create');
  }
}

export default connect(state => state.home)(Home);
