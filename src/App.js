import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';

class App extends Component {
  render() {
    // We won't need the default App component, so we'll make some modifications
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}

export default App;
