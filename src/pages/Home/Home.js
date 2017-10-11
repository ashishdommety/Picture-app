import React, {Component} from 'react';

class Home extends Component{
  render(){
    return(
      <div>
        <h1> Welcome to the Photo App </h1>
        <h2> You can search for pictures of anything here!</h2>
        <p>Click on the search button to head to the search page</p>
        <a href="/photos"> Search for Pictures</a>
        {/*<img src='https://placeholdit.co//i/555x150' alt='apple here'/>*/}
      </div>
    )
  }
}

export default Home;
