import React, { Component } from 'react';
import { connect } from '98k';

import Activity from '../components/activity';
import Menu from '../../../components/menu';
import Header from '../../../components/header';

class Category extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.dispatch({
      type    : 'category/fetchActivities',
      payload : category,
    });
  }

  render() {
    const category = this.props.match.params.category;
    const activities = this.props[category];

    return (
      <div className='container-fluid'>
        <Header/>
        <Menu/>
        {activities ? (
          <div>
            {activities.map(activity => (
              <Activity activity={activity}/>
            ))}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

export default connect(state => state.category)(Category);
