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

// Use the React library to create a component class, SearchBar
class SearchBar extends React.Component {

}
