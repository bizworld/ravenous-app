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

/* default export at the bottom of the file (instead of named export in the
class declaration) to be consistent across with how components are exported in
the Ravenous project. */ 
export default App;
