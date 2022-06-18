// Code MovieReviews Here
import React from "react"

import Review from "./Review"







 const MovieReviews = ({reviews}) => {
         return (<div className="review-list">{reviews.map((movie, idx) => <Review movie={movie}/> )}</div>)
}


MovieReviews.defaultProps = {
    reviews: []
  };



export default MovieReviews
