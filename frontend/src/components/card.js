import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import styles from './card.scss';

class Card extends Component {
  render() {
    const { name, image } = this.props.activity;

    return (
      <div className={cx('card', styles['container'])} onClick={this.goto}>
        <img className='card-img-top' src={`${image}`} />
        <div className='card-body'>
          <p className='card-text'>{name}</p>
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
