import React, { Component } from 'react';
import './App.css';
import Movie from './components/movies';

class App extends Component {
  state = {

  };

  render() {
    return(
      <main className="container"><Movie /></main>
    );
  }

  handleDelete = movie =>{};
}

export default App;
