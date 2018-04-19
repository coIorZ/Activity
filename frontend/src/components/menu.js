import React, { Component } from 'react';
import { connect } from '98k';
//import cx from 'classnames';
//import styles from './menu.scss';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return(
      <div className='row bg-dark justify-content-center'>
        <div className='nav text-uppercase'>
          <Link className='nav-item nav-link text-white' to='/c/music'>Music</Link>
          <Link className='nav-item nav-link text-white' to='/c/lecture'>Lecture</Link>
          <Link className='nav-item nav-link text-white' to='/c/party'>Party</Link>
          <Link className='nav-item nav-link text-white' to='/c/movie'>Movie</Link>
          <Link className='nav-item nav-link text-white' to='/c/exhibition'>Exhibition</Link>
          <Link className='nav-item nav-link text-white' to='/c/sport'>Sport</Link>
          <Link className='nav-item nav-link text-white' to='/c/travel'>Travel</Link>
          <Link className='nav-item nav-link text-white' to='/c/others'>Others</Link>
        </div>
      </div>
    );
  }
}
