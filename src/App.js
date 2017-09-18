import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Photos from './pages/Photos/Photos';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/photos" component={Photos} />
        </div>
      </Router>
    );
  }
}

export default App;
