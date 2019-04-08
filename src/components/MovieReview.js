import React from 'react'
import placeholder from '../placeholder-05.jpg'

const MovieReview = ({review}) => {
  console.log("Movie Review:", review)

  let img = null
  if (review && review.multimedia && review.multimedia.src) {
    img = review.multimedia.src
  }

  const headline = review.headline.split("Review: ")

  return (
    <div className="movie-review">
      <a 
        className="movie-review-url" 
        href={review.link.url}
      >
        <img 
          className="movie-review-img"
          alt={headline[0]}
          src={img ? img : placeholder} 
        ></img>
      
        <div className="movie-review-text-content">
          <h1 className="title">
            {headline[0]} 
          </h1>
          <h3>{headline[1]}</h3>
          <div className="summary">{review.summary_short}</div>
          <div className="rating">{review.mpaa_rating}</div>
          <div className="published-date">{review.publication_date}</div>
          <div className="author">{review.byline}</div>
        </div>
      </a>
    </div> 
  )
}

export default MovieReview

// movieReview = {
//   byline,
//   critics_pick,
//   date_updated,
//   display_title,
//   headline,
//   link: {
//     suggested_link_text,
//     type,
//     url
//   },
//   mpaa_rating,
//   multimedia: {
//     height,
//     src,
//     type,
//     width
//   },
//   opening_date,
//   publication_date,
//   summary_short
// }