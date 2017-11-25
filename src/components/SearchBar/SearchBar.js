import React from 'react';
import './SearchBar.css'; // ./ means they are in the same directory.

/* To search for businesses (restaurants) in Ravenous, we'll need a search bar.
We'll implement this with a SearchBar component. */

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

/* Use the React library to create a component class, SearchBar, with a
renderSortByOptions() method.
The purpose of renderSortByOptions() is to dynamically create the list items
needed to display the sort options (Best Match, Highest Rated, Most Reviewed).
This is to help future proof against potential changes to the Yelp API. */
class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }

}
