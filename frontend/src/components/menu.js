import React, { Component } from 'react';
import { connect } from '98k';
import cx from 'classnames';
import styles from './menu.scss';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return(
      <div className={cx('row justify-content-center', styles['background'])}>
        <div className='nav text-uppercase'>
         <Link className={cx('nav-item nav-link', styles['item'])} to='/'>Home</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/music'>Music</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/lecture'>Lecture</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/party'>Party</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/movie'>Movie</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/exhibition'>Exhibition</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/sport'>Sport</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/travel'>Travel</Link>
          <Link className={cx('nav-item nav-link', styles['item'])} to='/c/others'>Others</Link>
        </div>
      </div>
    );
  }
}