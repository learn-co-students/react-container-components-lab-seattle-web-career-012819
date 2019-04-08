import React, { Component } from 'react';
import MovieReview from './MovieReview'

const NYT_API_KEY = 'DnACnkLaGaR4j7XJVto6ieEQNHB3vfZA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latestReviews: []
    }
  }

  componentDidMount() {
    this.fetchLatestReviews()
  }

  fetchLatestReviews() {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        this.setState({ latestReviews: json.results })
      })
  }

  renderLatestReviews(reviews) {
    if (reviews) {
      return reviews.map(review => {
        return <MovieReview 
                  key={review.display_title} 
                  review={review} 
              />
      })
    } else return null
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        {(() => this.renderLatestReviews(this.state.latestReviews))()}
      </div>
    )
  }
}

export default LatestMovieReviewsContainer


