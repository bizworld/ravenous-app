/* Code for Yelp API functionality.
So far, Ravenous is mostly static. (Build the functionality of) clicking
on the "Let's Go" button to retrieve results from the Yelp API. */
// Add credentials (API key from the Yelp API)
const apiKey = 'U3HjMMElPJpzzjF9h-o2TDYsggerqqc9hEcPXJExyuDYoPE7E4IHL7vIQ9T-kJQzohRXW2jj0GqOJc192Vk86Yt-Wb4HEbv-6TvtCrjQzX-inWTCqZeSVD0iaVY8WnYx';

/* Create a Yelp module
by 1st creating an empty object, Yelp, that will store the functionality needed
to interact with the Yelp API. */
const Yelp = {
  // Add the search() method we'll use to retrieve search results from the Yelp API.
  search: (term, location, sortBy) => {
    /* This `return` will return a promise that will ultimately resolve to our
    list of businesses (using JS ES6 string interpolation).
    Prepend the URL path with the CORS Anywhere API to bypass the CORS restriction. */
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    // browser header (2nd arg. to the fetch() call)
    {
      headers: { Authorization: `Bearer ${apiKey}` }
    }).then(
      /* a callback function to convert the returned response to JSON for us to
      be able to effectively utilize our list of businesses. */
      response => {
        return response.json();
      }
    ).then(
      /* Chain another .then() call to retrieve the list of businesses from the
      converted JSON response, passing in a callback function that takes a
      parameter, jsonResponse. */
      jsonResponse => {
        /* check to see if jsonResponse has a businesses key (this would
        represent a valid response returned by the Yelp API). */
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            /* return an object that includes all of the attributes needed to
            display a business in Ravenous. */
            {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });

        }
      }
    );

  }
};

/* Using `default export` (to be consistent with type of export used in Ravenous),
export the Yelp module to (expose it i.e.) make it available to the rest of the
Ravenous app. */
export default Yelp;
