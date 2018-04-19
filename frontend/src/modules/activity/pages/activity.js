import React, { Component } from 'react';
import { connect } from '98k';
import { withRouter, Link } from 'react-router-dom';
import cx from 'classnames';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div>
        <div>{comment.userName}</div>
        <div>{comment.comment}</div>
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
          <div>
            <div className='row'>

              <div className='col-2'>
                <img className='w-100' src='/Activity/assets/p2.jpg'/>
              </div>
              <div className='col-8'>
                <div>{activity.name}</div>
                <div>{activity.startTime}-{activity.endTime}</div>
                <div>{activity.desc}</div>

                {this.renderJoinBtn()}
              </div>
            </div>

            <div>
              <div>COMMENTS</div>
              <div>
                {activity.comments.map((comment, index) => (
                  <Comment key={index} comment={comment}/>
                ))}
              </div>
            </div>

            {user && this.isCommentValid() && (
              <form onSubmit={this.submit}>
                <textarea 
                  className='form-control'
                  rows='5'
                  Placeholder='please leave your comment here'
                  value={term}
                  onChange={this.change}
                />
                <button 
                  className={cx({
                    'btn'         : true,
                    'btn-success' : true,
                  })} 
                  onClick={this.comment}
                >COMMENT</button>
              </form>
            )}

          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
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
      <Link className='btn btn-success' to={{
        pathname : '/login',
        state    : { referrer: this.props.location },
      }}>JOIN</Link>
    );
    if(this.isParticipant()) return (
      <button 
        className={cx({
          'btn'        : true,
          'btn-danger' : true,
          'disabled'   : !this.isBefore(),
        })} 
        disabled={!this.isBefore()}
        onClick={this.quit}
      >QUIT</button>
    );
    if(this.isCreator()) return (
      <button 
        className={cx({
          'btn'        : true,
          'btn-danger' : true,
          'disabled'   : !this.isBefore(),
        })}
        disabled={!this.isBefore()}
        onClick={this.delete}
      >DELETE</button>
    );
    return (
      <button 
        className={cx({
          'btn'         : true,
          'btn-success' : true,
          'disabled'    : !this.isBefore(),
        })} 
        disabled={!this.isBefore()}
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
