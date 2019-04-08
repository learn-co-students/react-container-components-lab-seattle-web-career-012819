import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PFKGJ4rSe88AneYM8im0QkoGxoCkbn9m';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieReviews: []
    }
  }

  componentDidMount = () => {
    this.fetchReviews()
  }

  fetchReviews = () => {
    console.log('fetching reviews')
    fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({movieReviews: json.results})
    })
  }

  renderReviews = () => {
    console.log('rendering Reviews')
    return this.state.movieReviews.map((review, i) => {
      return <MovieReviews review={review} key={i}/>
    })
  }

  render() {
    return (
      <div className='review-list'>
        <h3>All Reviews</h3>
        {this.renderReviews()}
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
