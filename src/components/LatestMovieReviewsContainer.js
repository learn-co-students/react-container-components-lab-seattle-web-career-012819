import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import Key from './key.js'

const NYT_API_KEY = Key;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+ `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      reviews:[]
    }
  }


componentDidMount(){
  console.log(Key)
  fetch(URL)
  .then(res => res.json())
  .then(reviews => {
    this.setState({
      reviews: reviews.results.map((movie) => {
      return   movie
      })
    })
  })
}


  render () {
    const reviewList = this.state.reviews.map(thisMovie => {
      return <MovieReviews movie={thisMovie} key={thisMovie.headline}/>
    });

    return(
      <div className='latest-movie-reviews'>
        <div className="review-list">
          {reviewList}
        </div>
      </div>

    )

  }
}

export default LatestMovieReviewsContainer;
