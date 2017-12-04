import React from 'react'; // import the React library, to build the component, using React.
import './Business.css'; // import Business.css (in the same parent directory).

/* Create a Business component class (to produce a React component, Business)
Using `className` for JSX elements (as opposed to `class` for HTML elements).
child component */
class Business extends React.Component {
  render() {
    /* business information e.g. business.imageSrc, now has to be accessed via
    the business prop set in BusinessList.js, by prepending them with this.props. */
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/> {/* prepend with this.props */}
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

/* Using `default export`, export the Business component class to
(expose it i.e.) make it available to the rest of the Ravenous app. */
export default Business;
