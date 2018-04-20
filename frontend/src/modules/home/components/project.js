import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Sep from '../../../components/sep';
import Card from '../../../components/card';

class Project extends Component {
  render() {
    const { label, activities } = this.props;

    return (
      <div style={{ padding: '50px 0' }}>
        <div>
          <h2 className='text-center' style={{ cursor: 'pointer' }} onClick={this.goto}>
            {label}
          </h2>
          <Sep/>
        </div>
        {activities.length ? (
          <div className='row'>
            {activities.map(activity => (
              <div className='col-4'>
                <Card activity={activity} />
              </div>
            ))}
          </div>
        ) : (
          <h4 className='text-center text-muted'>No activities yet</h4>
        )}
      </div>
    );
  }

  goto = () => {
    this.props.history.push(this.props.to);
  }
}

export default withRouter(Project);
