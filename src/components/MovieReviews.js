// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  return (
    <ul>
      <h4> Title: {props.review.display_title} </h4>
      <li> Rating: {props.review.mpaa_rating} </li>
      <li> Author: {props.review.byline} </li>
      <li> Headline: {props.review.headline} </li>
      <li> Summary: {props.review.summary_short} </li>
    </ul>
  )
}

export default MovieReviews