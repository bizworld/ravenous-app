import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import Yelp from './util/Yelp.js'; // import the Yelp module from util folder in the same folder as App.js

// container component, parent component
class App extends Component {
  // you can pass `props` in as an argument, even if you won't use them
  constructor(props) {
    super(props); // calling the super() method on the 1st line

    // Set the initial state using, this.state
    this.state = {
      businesses: []
    };

    /* Bind the searchYelp() method to the current value of `this` (since we are
    about to update searchYelp() to use `this`). */
    this.searchYelp = this.searchYelp.bind(this);
  }

  /* The "Let's Go" button also needs to provide some sort of feedback to the
  user. Build functionality that simulates what a search might look like.
  (i.e. build partial functionality to simulate a search)
  searchYelp() accepts 3 parameters: term, location, and sortBy. These
  parameters represent the 3 pieces of information we'll send to the Yelp API. */
  searchYelp(term, location, sortBy) {
    /* Once we retrieve our list of businesses, we will need to update the `state`,
    do this by 1st chaining a then() call to the end of Yelp.search(), passing it
    a callback function that takes one parameter, businesses. */
    Yelp.search(term, location, sortBy).then(businesses => { // arrow function syntax
      // update the state, using setState().
      this.setState({
        // the object value, businesses is the returned array of businesses.
        businesses: businesses
      });
    });
  }

  render() {
    // We won't need the default App component, so we'll make some modifications
    /* Add a businesses property to the <BusinessList /> component inside of
    the render() method (with the prop value as the businesses array). */
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* use the searchYelp() method. By adding a searchYelp property to the SearchBar component */}
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} /> {/* this.state, not this.props, since `state` is defined as that empty array. */}
      </div>
    );
  }
}

/* default export at the bottom of the file (instead of named export in the
class declaration) to be consistent across with how components are exported in
the Ravenous project. */
export default App;
