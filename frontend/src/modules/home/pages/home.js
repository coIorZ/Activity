import React, { Component } from "react";
import { connect } from "98k";

import Header from "../../../components/header";
import Menu from "../../../components/menu";
import Project from "../components/project";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "home/fetchHome"
    });
  }

  render() {
    const { activities } = this.props;

    return (
      <div className="container-fluid">
        <Header />
        <Menu />
        <div className="row section section-header">
          <div
            className="parallax parallax-image "
            style={{
              position: 'relative',
              backgroundImage: "url(/Activity/assets/time.png)",
              width: "100vw",
              height: "85vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity:0.8
            }}
          >
            <div className="content text-center" style={{ marginTop: "300px" }}>
              <p style={{color:'#ffffff',fontSize:'50px'}}>Start!</p>
            </div>
            <span style={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ffffff'
            }} onClick={this.scroll}>
              <i className="fas fa-chevron-circle-down fa-3x"/>
            </span>
          </div>
        </div>
        {activities ? (
          <div className="">
            <Project
              label="Music"
              activities={activities.filter(a => a.category == "music")}
              to="/c/music"
            />
            <Project
              label="Lecture"
              activities={activities.filter(a => a.category == "lecture")}
              to="/c/lecture"
            />
            <Project
              label="Party"
              activities={activities.filter(a => a.category == "party")}
              to="/c/party"
            />
            <Project
              label="Movie"
              activities={activities.filter(a => a.category == "movie")}
              to="/c/movie"
            />
            <Project
              label="Exhibition"
              activities={activities.filter(a => a.category == "exhibition")}
              to="/c/exhibition"
            />
            <Project
              label="Sport"
              activities={activities.filter(a => a.category == "sport")}
              to="/c/sport"
            />
            <Project
              label="Travel"
              activities={activities.filter(a => a.category == "travel")}
              to="/c/travel"
            />
            <Project
              label="Others"
              activities={activities.filter(a => a.category == "others")}
              to="/c/others"
            />
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }

  scroll = () => {
    window.scrollTo({
      top:750,
      behavior: 'smooth',
    })
  }

  createActivity = () => {
    this.props.history.push("/create");
  };
}

export default connect(state => state.home)(Home);
