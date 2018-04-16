import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        home
        <img 
        src="/Activity/assets/p1.jpg"  
        alt="create activity" 
        onClick={this.createActivity}
        />
      </div>
    );
  }

  createActivity = () => {
    this.props.history.push('/create');
  }
}

export default Home;
