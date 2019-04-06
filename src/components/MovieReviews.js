// Code MovieReviews Here
import React from 'react';

const Review = (props) =>{
  return(
    <div key={props.headline}>

    <h4>Headline - {props.headline}</h4>
    <h5>Summary - {props.summary_short}</h5>
    <a href={props.link.url}>Full Review</a>

    </div>
  )
}

const MovieReviews = ({reviews}) =>{
    return reviews.map(review =>(

     Review(review)
  ))
}

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews;
