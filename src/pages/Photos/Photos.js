import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import API from "../../API/api";
import "./Photos.css";

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

  handleClick(event) {
    event.preventDefault();
    if (this.state.searchQuery.length === 0) {
      this.setState({
        searchQuery: "random stuff"
      });
    }
    this.loadPictures(this.state.searchQuery);
  }

  handleInputChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  loadPictures = searchName => {
    API.getPictures(searchName)
      .then(res =>
        this.setState({
          image: res.data.hits
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    //since we're getting a response from an ajax, we first check if the image
    //is empty, or has changed
    if (this.state.image === "") {
      return (
        <div>
          <Navbar />
          <div id="search_section">
            <h4 className="search_title">Search below:</h4>
            <hr />
            <form>
              <input
                id="search_input"
                value={this.state.searchQuery}
                onChange={this.handleInputChange}
                placeholder="type search value here"
                name="search"
                type="text"
              />
              <button id="search_button" onClick={this.handleClick}>
                {" "}
                Get Pictures
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <div id="search_section">
            <h3 className="search_title">
              {" "}
              Pictures of {this.state.searchQuery}{" "}
            </h3>
            <hr />
            {/*write conditional to handle no responses here*/
            !this.state.image.length ? (
              <p>Pictures do not exist in the db</p>
            ) : (
              this.state.image.map(x => (
                <div className="searched_divs">
                  <a href={x.pageURL} target="_blank">
                    <img
                      className="searched_pics"
                      src={x.previewURL}
                      alt="apple not found"
                    />
                  </a>
                </div>
              ))
            )}
            <br />
            <a href="/photos">
              <button className="re_search">Search for something else</button>
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Photos;
