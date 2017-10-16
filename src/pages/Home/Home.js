import React, {Component} from 'react';
import "./Home.css";

class Home extends Component{
  render(){
    return(
      <div className="home_content">
        <h1>Picture Time</h1>
        <h4> A place to look for any picture.</h4>
        <a href="/photos"><button id="goto_search">Search for Pictures</button></a>
        {/*<img src='https://placeholdit.co//i/555x150' alt='apple here'/>*/}
      </div>
    )
  }
}

export default Home;
