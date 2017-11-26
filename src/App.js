import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';

/* When the Yelp API is implemented, a list of businesses will be returned to
App.js. So, we should create a hard-coded list of businesses here and then pass
them to the appropriate components. */
// business object
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

class App extends Component {
  render() {
    // We won't need the default App component, so we'll make some modifications
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

/* default export at the bottom of the file (instead of named export in the
class declaration) to be consistent across with how components are exported in
the Ravenous project. */
export default App;
