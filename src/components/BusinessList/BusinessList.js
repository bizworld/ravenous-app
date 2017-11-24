import React from 'react'; // import the React library
import './BusinessList.css'; // import BusinessList.css (located in the same folder)
import Business from '../Business/Business'; // import the Buiness component class (.. is a parent directory)

/* The point of the <BusinessList /> component is to simulate what a returned
list of businesses would look like in Ravenous (after querying e.g. the Yelp API).
To help this simulation, <BusinessList /> will make use of the
<Business /> component repeatedly.
Create the BusinessList component class (that will produce the <BusinessList />
component). */
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business /> <!-- Add Business components -->
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

/* The BusinessList component class (that produces the list component,
<BusinessList /> component) will need to be rendered again by another component.
Hence, it is exported. */
export default BusinessList;
