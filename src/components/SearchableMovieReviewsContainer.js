import React, { Component } from 'react';
import MovieReview from './MovieReview'

const NYT_API_KEY = 'DnACnkLaGaR4j7XJVto6ieEQNHB3vfZA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const URL_END = `&api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foundReviews: [],
      searchInput: ''
    }
  }

  
  renderFoundMovieReviews() {
    return this.state.foundReviews
      .map(review => (
        <MovieReview 
          key={review.display_title} 
          review={review} 
        />
      )
    )
  }

  searchMovieReviews(searchTerm) {
    const searchURL = URL + searchTerm + URL_END
    fetch(searchURL)
      .then(response => response.json())
      .then(json => {
        const reviews = json.results
        const sortedReviews = reviews.sort((a, b) => 
          getTime(b.publication_date) - getTime(a.publication_date))
        this.setState({ foundReviews: sortedReviews })
      })
  }

  handleSearchInput = (e) => {
    e.preventDefault()
    this.setState({searchInput: e.target.value})
  }

  handleSearchMoviewReviews = (e) => {
    e.preventDefault()
    // console.log("SEARCH!", this.state)
    this.searchMovieReviews(this.state.searchInput)
  }

  render () {
    return (
      <div className="movie-reviews">
        <form 
          className="movie-search-form"
          onSubmit={this.handleSearchMovieReviews} 
        >
          <label >Search Movie Reviews</label>
          <input 
            type="text" 
            className="search" 
            onChange={this.handleSearchInput}            
            value={this.state.searchInput}
          ></input>
          <input type="submit" value="Search" onClick={this.handleSearchMoviewReviews}></input>
        </form>
        <div className='found-movie-reviews'>
          {this.renderFoundMovieReviews()}
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer

function getTime(dateTime) {
  return new Date(dateTime).getTime()
}