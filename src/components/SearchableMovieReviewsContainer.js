import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'N2erDi30ylvZUw4CHn0n83YHVTL0uEUu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      reviews:[],
      searchTerm: ''
    }
  }

fetchMovies = () =>{
  fetch(URL + `query=${this.state.searchTerm}&` + `api-key=${NYT_API_KEY}`)
  .then(res => res.json())
  .then(reviews => {
    this.setState({
      reviews: reviews.results.map((movie) => {
      return  movie
      })
    })
  })
}

handleSubmission =(e) => {
  e.preventDefault();
  this.fetchMovies()
}

handleChange =(e) => {
  this.setState({
    searchTerm: e.target.value
  })
}


render(){
  const reviewList = this.state.reviews.map(thisMovie => {
    return <MovieReviews movie={thisMovie} key={thisMovie.headline}/>
  });

  return(
    <div className ="searchable-movie-reviews">
      <form onSubmit={this.handleSubmission}>
        <input onChange={this.handleChange} type="text" placeholder = 'search for a movie'/>
        <button type ='Submit' > Search </button>
      </form>
          <div className='searchable-movie-reviews'>
            <div className="review-list">
              {reviewList}
            </div>
          </div>
    </div>
  )
}
}
