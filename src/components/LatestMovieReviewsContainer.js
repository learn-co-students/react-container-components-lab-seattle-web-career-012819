import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KGdxYA8fcGNZ3eArIsSG5AR6xr8ZN87G';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state ={
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(json =>{
      this.setState({
        reviews: json.results
      })
      //console.log(this.state.reviews)
    })
  }
  render(){
    return(
      <div>
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}

export default LatestMovieReviewsContainer;
