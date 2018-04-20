import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import styles from './card.scss';

class Card extends Component {
  render() {
    const { name, image, startTime, endTime, count } = this.props.activity;

    return (
      <div className={cx('card box-shadow', styles['container'])} onClick={this.goto}>
        <div className={styles['image']} style={{
          backgroundImage: `url(${image})`,
        }}>
        </div>
        <div className='card-body'>
          <h4 className={cx('mb-0', styles['card-name'])}>{name}</h4>
          <div className='mb-1 text-muted'>{startTime.split(' ')[0]} ~ {endTime.split(' ')[0]}</div>
          <div className='mb-1 text-muted'>Participants: {count}</div>
        </div>

      </div>
    );
  }

  goto = () => {
    const { id } = this.props.activity;
    this.props.history.push(`/a/${id}`);
  }
}

export default withRouter(Card);
