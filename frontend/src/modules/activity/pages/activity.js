import React, { Component } from 'react';
import { connect } from '98k';
import { withRouter } from 'react-router-dom';

import Header from '../../../components/header';
import Menu from '../../../components/menu';

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
    //const { name, image, desc, time } = this.props.activity;
    const { term } = this.state;

    return(
      <div className='container-fluid'>
        <Header/>
        <Menu/>

        <div className='row'>
          <div className='col-2'>
            <img className='w-100' src='/Activity/assets/p2.jpg'/>
          </div>
          <div className='col-8'></div>
        </div>

        <button className='btn btn-success' onClick={this.participate}>JOIN</button>
        <form onSubmit={this.submit}>
          <textarea 
            className='form-control'
            rows='5'
            Placeholder='please leave your comment here'
            value={term}
            onChange={this.change}
          />
          <button className='btn btn-success' onClick={this.comment}>COMMENT</button>
        </form>
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

  participate = () => {
    const user = this.props.user;
    if (!user) {
      return this.props.history.push('/login', { referrer: this.props.location });
    }
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
  }
}

export default connect(state => ({
  activity : state.activity.activity,
  user     : state.auth.user,
}))(withRouter(Activity));
