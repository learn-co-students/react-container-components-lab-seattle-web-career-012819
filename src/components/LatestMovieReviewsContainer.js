import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
console.log(URL)
class LatestMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: []
        }
        
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=')
        .then(response => response.json())
        .then(reviews => this.setState({reviews: reviews.results}, () => console.log(this.state.movies)))
    }
    
  
    render(){
        return (
            <div className="latest-movie-reviews">
            {this.state.reviews.map(movie => {
                // console.log(movie)
                return <MovieReviews key={movie.display_title} movie={movie} />
            })}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer