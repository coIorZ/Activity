import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import styles from './activity.scss';

class Activity extends Component {
  render() {
    const { name, image } = this.props.activity;

    return (
      <div className={cx('card', styles['container'])} onClick={this.goto}>
        <img className='card-img-top' src={`${image}`} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
        </div>
      </div>
    );
  }

  goto = () => {
    const { id } = this.props.activity;
    this.props.history.push(`/a/${id}`);
  }
}

export default withRouter(Activity);
