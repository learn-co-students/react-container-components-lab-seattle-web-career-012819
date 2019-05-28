// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    // console.log(props.movie)

        return (
        <div className="review">
        <h3>{props.movie.headline}</h3>
        <h5>{props.movie.byline}</h5>
        <img src={props.movie.multimedia.src} alt={props.movie.display_title} width={props.movie.multimedia.width} />
        </div>
        )
}

export default MovieReviews