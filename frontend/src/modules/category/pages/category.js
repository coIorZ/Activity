import React, { Component } from 'react';
import { connect } from '98k';

import Sep from '../../../components/sep';
import Card from '../../../components/card';
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

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.category !== nextProps.match.params.category) {
      this.props.dispatch({
        type    : 'category/fetchActivities',
        payload : nextProps.match.params.category,
      });
    }
  }

  render() {
    const { activities } = this.props;

    return (
      <div className='container-fluid'>
        <Header/>
        <Menu/>
        <div>
          <h2 className='text-center' style={{ paddingTop: 50 }}>
            {this.props.match.params.category}
          </h2>
          <Sep/>
        </div>
        {activities ? (
          <div className='row'>
            {activities.map(activity => (
              <div className='col-4'>
                <Card activity={activity}/>
              </div>
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
