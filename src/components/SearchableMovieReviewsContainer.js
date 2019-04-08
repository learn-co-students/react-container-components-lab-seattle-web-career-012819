import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PFKGJ4rSe88AneYM8im0QkoGxoCkbn9m';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      searchResults: []
    }
  }

  fetchResults = () => {
    fetch(URL.concat(this.state.search))
    .then(results => {
      return results.json()
    })
    .then(json => {
      this.setState({searchResults: json.results})
    })
  }

  handleSearchClick = (ev) => {
    console.log('handle search click')
    ev.preventDefault()
    this.fetchResults(this.state.search)
  }

  renderReviews = () => {
    return this.state.searchResults.map((review, i) => {
      return <MovieReviews key={i} review={review} />
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={(ev) => this.handleSearchClick(ev)}>
          <input type="text" onChange={(ev) => this.setState({search: ev.target.value})} value={this.state.search}/>
          <input type="submit" value="Search Reviews"/>
        </form>

        <h3>Search Results</h3>
        <div>
          {this.renderReviews()}
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer