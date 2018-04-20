import React, { Component } from 'react';
import { connect } from '98k';
import { withRouter, Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './activity.scss';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div style={{ margin: '15px 0px', borderTop: '1px solid #ccc', padding: '10px 10px 0px' }}>
        <p style={{ fontSize: '1.3rem' }}>
          <em style={{ color: '#666', fontSize: 14 }}><Link to={`/u/${comment.userId}`}>{comment.userName}</Link> - <span>{comment.createdAt}</span></em>
        </p>
        <p style={{ fontSize: 18 }}>{comment.comment}</p>
      </div>
    );
  }
}

class Activity extends Component {
  state = {
    term: '',
  }

  componentDidMount() {
    const activityId = this.props.match.params.activityId;
    this.props.dispatch({
      type    : 'activity/fetchActivity',
      payload : activityId,
    });
  }
  
  render() {
    const { user } = this.props;
    const { activity } = this.props;
    const { term } = this.state;


    return (
      <div className='container-fluid'>
        <Header/>
        <Menu/>

        {activity ? (
          <div className='container'>
            <div className={cx('row', styles['detail'])}>

              <div className='col-6'>
                <div className={styles['detail-image']} style={{ backgroundImage: `url(${activity.image})` }}></div>
              </div>
              <div className={cx('col-6', styles['detail-right'])}>
                <div className={cx('text-center', styles['detail-right-text'])}>
                  <div className='text-uppercase' style={{ fontSize: '2rem' }}>{activity.name}</div>
                  <div>{activity.startTime.split(' ')[0]} - {activity.startTime.split(' ')[0]}</div>
                  <div style={{
                    maxHeight : 90,
                    overflow  : 'auto',
                  }}>{activity.desc}</div>

                  {user ? (
                    <div style={{ margin: '10px' }}>
                      <span onClick={this.like} >
                        <i
                          className={cx({
                            'fa-heart'       : true,
                            'fas'            : this.haveLike(),
                            'far'            : !this.haveLike(),
                            [styles['like']] : true,
                          })} 
                        /></span>
                      <div>{activity.likes}</div>
                    </div>
                  ) : (
                    <div style={{ margin: '10px' }}>
                      <Link to={{
                        pathname : '/login',
                        state    : { referrer: this.props.location },
                      }}>
                        <i className={cx('fa-heart', 'far', styles['like'])} />
                      </Link>
                      <div>{activity.likes}</div>
                    </div>)}
                </div>

                <div className={cx('text-center', styles['detail-right-btn'])}>
                  {this.renderJoinBtn()}
                </div>
              </div>

            </div>
            <div className='row'>
              <div className='col-12'>
                {user && this.isCommentValid() && (
                  <form onSubmit={this.submit} style={{ marginTop: '20px' }}>
                    <textarea 
                      className='form-control'
                      rows='5'
                      Placeholder='please leave your comment here'
                      value={term}
                      onChange={this.change}
                    />
                    <button 
                      className={cx({
                        'btn'                 : true,
                        'btn-outline-success' : true,
                      })} 
                      style={{ marginTop: '10px' }}
                      onClick={this.comment}
                    >COMMENT</button>
                  </form>
                )}

                <div style={{ margin: '10px 0px' }}>
                  {activity.comments.map((comment, index) => (
                    <Comment key={index} comment={comment}/>
                  ))}
                </div>

              </div>
            </div>


          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }

  like = () => {
    const { user: { id: userId }, activity: { id: activityId } } = this.props;
    if (this.haveLike())  {
      this.props.dispatch({
        type    : 'activity/dislikeActivity',
        payload : { userId, activityId },
      });
    } else {
      this.props.dispatch({
        type    : 'activity/likeActivity',
        payload : { userId, activityId },
      });
    }
  }


  haveLike = () => {
    const { user:{ id: userId }, activity: { likeusers } } = this.props;
    return likeusers.map(u => u.id).includes(userId);
  }

  change = e => {
    this.setState({
      term: e.target.value,
    });
  }

  submit = e => {
    e.preventDefault();
  }

  renderJoinBtn = () => {
    const { user } = this.props;
    if(!user) return (
      <Link className={cx('btn', 'btn-outline-success', styles['btn-new'])} to={{
        pathname : '/login',
        state    : { referrer: this.props.location },
      }}>JOIN</Link>
    );
    if(this.isParticipant()) return (
      <button 
        className={cx({
          'btn'                : true,
          'btn-outline-danger' : true,
          'disabled'           : !this.isBefore(),
          [styles['btn-new']]  : true,
        })} 
        disabled={!this.isBefore()}
        onClick={this.quit}
      >QUIT</button>
    );
    if(this.isCreator()) return (
      <button 
        className={cx({
          'btn'                : true,
          'btn-outline-danger' : true,
          'disabled'           : !this.isBefore(),
          [styles['btn-new']]  : true,
        })}
        disabled={!this.isBefore()}
        onClick={this.delete}
      >DELETE</button>
    );
    const { count, participants } = this.props.activity;
    const disabled = !this.isBefore() || (participants >= count);
    return (
      <button 
        className={cx({
          'btn'               : true,
          'btn-success'       : true,
          'disabled'          : disabled,
          [styles['btn-new']] : true,
        })} 
        disabled={disabled}
        onClick={this.participate}
      >JOIN</button>
    );
  }

  isParticipant = () => {
    const { user: { id }, activity: { users } } = this.props;
    return users.map(u => u.id).includes(id);
  }

  isCreator = () => {
    const { user: { id }, activity: { creatorId } } = this.props;
    return id == creatorId;
  }

  isBefore = () => {
    const { activity: { startTime } } = this.props;
    const today = new Date().getTime();
    const start = new Date(startTime).getTime();
    return today < start;
  }

  isCommentValid = () => {
    const { activity: { startTime } } = this.props;
    const today = new Date().getTime();
    const start = new Date(startTime).getTime();

    return (this.isParticipant() || this.isCreator()) && (today > start);
  }

  delete = () => {
    this.props.dispatch({
      type    : 'activity/deleteActivity',
      payload : this.props.activity.id,
    });
  }

  quit = () => {
    this.props.dispatch({
      type    : 'activity/quitActivity',
      payload : { userId: this.props.user.id, activityId: this.props.activity.id },
    });
  }

  participate = () => {
    this.props.dispatch({
      type    : 'activity/joinActivity',
      payload : { userId: this.props.user.id, activityId: this.props.activity.id },
    });
  }

  comment = () => {
    const user = this.props.user;
    if (!user) {
      this.props.history.push('/login');
    }
    this.props.dispatch({
      type    : 'activity/comment',
      payload : { 
        userId     : this.props.user.id,
        activityId : this.props.activity.id,
        comment    : this.state.term,
      },
    });
    this.setState({ term: '' });
  }
}

export default connect(state => ({
  activity : state.activity.activity,
  user     : state.auth.user,
}))(withRouter(Activity));
