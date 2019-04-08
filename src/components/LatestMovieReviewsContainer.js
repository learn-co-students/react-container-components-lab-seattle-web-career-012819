import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'YRhkB6nCpRmET8NzA1dqRcLmEfM3iAnZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state ={
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            this.setState({reviews: data.results});
        })
    }

    topFive = () => {
        if (this.state.reviews.length >= 5) {
            return this.state.reviews.splice(0,5).map((review, index) => {
                return <MovieReviews key={index} review={review} />
            })
        }
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Movie Reviews</h1>
                {this.topFive()}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;