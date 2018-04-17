import React, { Component } from 'react';
import { connect } from '98k';
import Activity from '../components/activity';

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

    return activities ? (
      <div>
        {activities.map(activity => (
          <Activity activity={activity}/>
        ))}
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default connect(state => state.category)(Category);
