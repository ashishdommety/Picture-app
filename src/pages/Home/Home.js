import React, {Component} from 'react';

class Home extends Component{
  render(){
    return(
      <div>
        <h1> Welcome to the Apple App </h1>
        <h2> You can learn a lot about apples here </h2>
        <p>Go the /photos to check out some pictures of apples </p>
        <img src='https://placeholdit.co//i/555x150' alt='apple here'/>
      </div>
    )
  }
}

export default Home;
