import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import styles from './card.scss';

class Card extends Component {
  render() {
    const { name, image, startTime, endTime, count} = this.props.activity;

    return (
      <div className={cx('card flex-md-row mb-4 box-sjadow h-md-250 mt-4 img-thumbnail col-4 ', styles['container'])} onClick={this.goto}>
        {/* <div>
          <img className='card-img-left' src={`${image}`} />
        </div> */}
        <img className={cx('card-img-left flex-auto d-done d-md-block', styles['image'])} 
        src={`${image}`} 
        // src='/Activity/assets/p3.jpg'
        />
        {/* <div className='card-body'>
          <p className='card-text'>{name}</p>
        </div> */}
        <div className='card-body d-flex flex-column align-items-start'>
        <h3 className='mb-0'>{name}</h3>
        <div className='mb-1 text-muted'>{startTime}-{endTime}</div>
        <div className='mb-1 text-muted'>Participant Number:{count}</div>
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
