import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import Yelp from './util/Yelp.js'; // import the Yelp module from util folder in the same folder as App.js

/* When the Yelp API is implemented, a list of businesses will be returned to
App.js (the container component). So, we should create a hard-coded list of
businesses here and then pass them to the appropriate components. */
// business (information) object
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

// businesses array that holds 6 instances of the business object.
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];
// container component, parent component
class App extends Component {
  /* The "Let's Go" button also needs to provide some sort of feedback to the
  user. Build functionality that simulates what a search might look like.
  (i.e. build partial functionality to simulate a search)
  searchYelp() accepts 3 parameters: term, location, and sortBy. These
  parameters represent the 3 pieces of information we'll send to the Yelp API. */
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
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
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

/* default export at the bottom of the file (instead of named export in the
class declaration) to be consistent across with how components are exported in
the Ravenous project. */
export default App;
