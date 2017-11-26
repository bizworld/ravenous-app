import React from 'react'; // import the React library, to build the component, using React.
import './Business.css'; // import Business.css (in the same parent directory).

/* Create a Business component class (to produce a React component, Business)
Using `className` for JSX elements (as opposed to `class` for HTML elements). */
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

/* Using `default export`, export the Business component class to
(expose it i.e.) make it available to the rest of the Ravenous app. */
export default Business;
