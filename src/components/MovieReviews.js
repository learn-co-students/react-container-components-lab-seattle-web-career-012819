// Code MovieReviews Here
import React from 'react'

const MovieReviews =(props) => {
  const movie= props.movie
  return(
    <div className="review">
      <h3>{movie.display_title} </h3>
      <p>Rating: {movie.mpaa_rating} </p>
      {movie.multimedia !==null ? <img src ={movie.multimedia.src} alt={movie.display_title} />: <img src ='https://t4.ftcdn.net/jpg/01/39/16/63/240_F_139166369_NdTDXc0lM57N66868lC66PpsaMkFSwaf.jpg' alt={movie.display_title} />}
      <p>Headline: {movie.headline} </p>
    </div>
  )
}

export default MovieReviews
