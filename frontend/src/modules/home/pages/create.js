import React, { Component } from 'react';
import { connect } from '98k';
import { Redirect } from 'react-router-dom';

import withAuth from '../../../lib/withAuth';
import Header from '../../../components/header';
import Menu from '../../../components/menu';

class Create extends Component {
    state = {
      image     : '',
      imageUrl  : '',
      category  : 'music',
      name      : '',
      count     : '',
      startTime : '',
      endTime   : '',
      desc      : '',
    }

    render() {
      const { user } = this.props;
      const { imageUrl, category, name, count, startTime, endTime, desc } = this.state;

      return user ? (
        <div className='container-fluid'>
          <Header />
          <Menu />
          <form className='m-5'>
            <h1 className='form-group row justify-content-center'>Create Activity</h1>
            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>Category</label>
              <div className='col-4'>
                <select className='form-control' value={category} onChange={this.selectCategory}>
                  <option value='music'>Music</option>
                  <option value='lecture'>Lecture</option>
                  <option value='party'>Party</option>
                  <option value='movie'>Movie</option>
                  <option value='exhibition'>Exhibition</option>
                  <option value='sport'>Sport</option>
                  <option value='travel'>Travel</option>
                  <option value='others'>Others</option>
                </select>
              </div>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>Activity Name</label>
              <div className='col-4'>
                <input className='form-control' value={name} placeholder='Activity Name' onChange={this.inputName}></input>
              </div>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>Count</label>
              <div className='col-4'>
                <input className='form-control' value={count} placeholder='number' onChange={this.inputCount}></input>
              </div>
            </div>


            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>Start</label>
              <div className='col-4'>
                <input className='form-control' value={startTime} placeholder='20xx-xx-xx' onChange={this.inputBeginTime} />
              </div>
            </div>
            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>End</label>
              <div className='col-4'>
                <input className='form-control' value={endTime} placeholder='20xx-xx-xx' onChange={this.inputEndTime} />
              </div>
            </div>

            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>Description</label>
              <div className='col-4'>
                <textarea className='form-control' rows='5' value={desc} placeholder='Details' onChange={this.inputDescription}></textarea>
              </div>
            </div>

            <div className='form-group row justify-content-center'>
              <label className='col-2 col-form-label'>Image</label>
              <div className='col-4'>
                <input className='form-control' type='file' accept='image/*'
                  onChange={this.selectImage}
                />
                <div className='mt-3'>
                  {imageUrl && <img className='w-100' src={imageUrl} />}
                </div>
              </div>
            </div>

            <div className='row justify-content-center'>
              <button type='button' className='btn btn-primary' onClick={this.createActivity}>Create</button>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to='/login'/>
      );
    }

    selectCategory = e => {
      this.setState({
        category: e.target.value,
      });
    }
    inputName = e => {
      this.setState({
        name: e.target.value,
      });
    }
    inputCount = e => {
      this.setState({
        count: e.target.value,
      });
    }
    inputBeginTime = e => {
      this.setState({
        startTime: e.target.value,
      });
    }
    inputEndTime = e => {
      this.setState({
        endTime: e.target.value,
      });
    }
    inputDescription = e => {
      this.setState({
        desc: e.target.value,
      });
    }

    selectImage = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = arg => {
        this.setState({
          imageUrl: arg.target.result,
        });
        this.image = file;
      };
    }

    createActivity = () => {
      this.props.dispatch({
        type    : 'home/createActivity',
        payload : { ...this.state, creatorId: this.props.user.id, image: this.image },
      });
    }
}

export default connect(state => ({
  user: state.auth.user,
}))(withAuth(Create));
