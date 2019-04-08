import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'YRhkB6nCpRmET8NzA1dqRcLmEfM3iAnZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            query: "",
            reviews: []
        }
    }

    loadReviews = () => {
        if (this.state.reviews.length > 0) {
            return this.state.reviews.map((review, index) => {
                return <MovieReviews key={index} review={review} />
            })
        }
    }
    
    handleQueryChange = (ev) => {
        this.setState({query: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        fetch(URL.concat(this.state.query))
        .then(resp => resp.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }
    
    render() {
        return (
            <div>
                <h1>Search for Movie Reviews!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for Movies: </label>
                    <input type="text" onChange={this.handleQueryChange}/>
                    <button type="submit">Submit</button>
                </form>
                <h2>Results</h2>
                {this.loadReviews()}

            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;
