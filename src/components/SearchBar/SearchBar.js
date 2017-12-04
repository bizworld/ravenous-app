import React from 'react';
import './SearchBar.css'; // ./ means they are in the same directory.

/* To search for businesses (restaurants) in Ravenous, we'll need a search bar.
We'll implement this with a SearchBar component. */



/* Use the React library to create a component class, SearchBar, with a
renderSortByOptions() method.
The purpose of renderSortByOptions() is to dynamically create the list items
needed to display the sort options (Best Match, Highest Rated, Most Reviewed).
This is to help future proof against potential changes to the Yelp API. */
class SearchBar extends React.Component {
  constructor(props) {
    super(props); // calling the super() method on the 1st line

    // set the initial state of the search bar
    this.state = {
      term: '', // the search term located in the search input
      location: '', // the location to search near from the location input
      sortBy: 'best_match' // represents the selected sorting option to use.
    };

    /*  Since both of these methods use `this` (by calling .setState() on it),
    bind both methods (handleTermChange() and handleLocationChange()) to the
    current value of `this`. */
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

    /* The search bar will communicate with the Yelp API. For now, build part of the
    structure that's needed to communicate with the Yelp API. Specifically, requests
    to the Yelp API must follow formatting and naming conventions set by the API.
    To achieve this, we'll create an object, sortByOptions, with keys and values
    that conform to what the API expects to receive (as shown in the API
    documentation). */
    const sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };

  }

  /* A method that sets the state of a sorting option. This method will be
  useful when communicating with the Yelp API in the future. */
  handleSortByChange(sortByOption) {
    // update the state by calling .setState()
    this.setState({
      sortBy: sortByOption
    });
  }

  /* Ravenous will also need to handle changes in the two input elements.
  Specifically, it will need to handle changes in "Terms" (businesses) and
  "Location" (location to search in).
  Since both will be related to events being triggered, they both accept event
  (event object) as an argument. */
  handleTermChange(event) {
    // update the state
    this.setState({
      // extract the needed value from the event object and set as term's new value
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  /* Create a method that returns the current CSS class of the sort options,
  returning whether or not each one should be styled as if it has been selected.
  i.e. getSortByClass() returns the current CSS class for a sorting option.
  It will be useful in providing visual feedback to users of Ravenous. */
  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return ''; // otherwise, return an empty string
    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      /* The value of the `className` attribute will conditionally style each sort
      by option, displaying to the user which sorting option is currently selected.
      the onClick attribute updates the state of a sorting option when it is clicked.
      This will allow us to both bind to the current value of this (as we usually
      do in the constructor()) but also bind the current sortByOptionValue as the
      first argument to the method call, ensuring the method is called with the
      appropriate value when clicked. */
      return <li className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          {/* use the handleTermChange() and handleLocationChange() methods */}
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a>{`Let's Go`}</a>
        </div>
      </div>
    );
  }

}

/* This list component, SearchBar, will need to be rendered again by another
component, so you'll need to export it. */
export default SearchBar;
