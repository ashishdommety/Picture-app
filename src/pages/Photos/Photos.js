import React, {Component} from 'react';
// import
import API from '../../API/api';

class Photos extends Component{
  //creating the inital state
  state = {
    image: ""
  };

  componentWillMount() {
    //since the data being returned is async, we need to handle the
    //possibility of an empty response in the render function
    this.loadApples();
  }

  loadApples = () => {
    API.getApplePictures()
        .then(res =>
          this.setState({
            image:res.data.hits
          })
        ).catch(err => console.log(err));
  };

  render(){
    //since we're getting
    console.log(this.state.image);
    if(this.state.image === '') {
      return(
        <div>
        <h3>These are pictures of apples</h3>
        <p> Apples are loading, please wait</p>
        </div>
      )
    } else {
      return(
        <div>
          <h3>These are pictures of apples</h3>
          {this.state.image.map(x =>
            <img src = {x.previewURL} alt='apple not found'/>
          )}
          {/*<button>Get Pictures</button>*/}
        </div>
      )
    }
  }
}

export default Photos;
