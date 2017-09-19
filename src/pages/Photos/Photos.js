import React, {
  Component
} from 'react';
// import
import API from '../../API/api';

class Photos extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      image: "",
      searchQuery: ""
    };
    // Binding the event listeners which we will pass as props
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  //creating the inital state


  componentWillMount() {
    //since the data being returned is async, we need to handle the
    //possibility of an empty response in the render function
    // this.loadApples('apples');
  }

  handleClick(event) {
    event.preventDefault();
    // var comp = (event.currentTarget).data('comp');
    // console.log(event.target);
    // console.log(this.state.searchQuery);
    if(this.state.searchQuery.length === 0){
      this.setState({
        searchQuery:'random stuff'
      });
    }

    console.log(this.state.searchQuery.length);
    this.loadPictures(this.state.searchQuery);
    // console.log(this);
  }

  handleInputChange(event){
    //this changes the state every time input is given

    // QUESTION: Why does this not overwrite the existing value, and
    //concatenate it instead?
    this.setState({
      searchQuery: event.target.value
    })
  }

  loadPictures = (searchName) => {
    API.getPictures(searchName)
      .then(res =>
        this.setState({
          image: res.data.hits
        })
      ).catch(err => console.log(err));
  };

  render() {
    //since we're getting a response from an ajax, we first check if the image
    //is empty, or has changed
    // console.log(this.state.image);
    if (this.state.image === '') {
      return ( <div >
        <h3> You can search for pictures here < /h3>
        <p> Click the button to get the pictures you want</p>
         {
          /* we need to bind this to the handleClick function so it's accessible
                  in the click scope*/
          }
        <form>
        <input value = {this.state.searchQuery}
        onChange = {this.handleInputChange}
        name = 'search'
        type='text'/>
        <button onClick = {this.handleClick}> Get Pictures </button>
        </form>

        </div>
      )
    } else {
      return ( <div>
        <h3> These are pictures of {this.state.searchQuery} </h3> {
          this.state.image.map(x =>
            <img src = {x.previewURL}
              alt = 'apple not found'/>
          )
        }
        </div>
      )
    }
  }
}

export default Photos;
