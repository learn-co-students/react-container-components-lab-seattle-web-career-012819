import React, { Component } from 'react'

class MovieReviews extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2><a href={this.props.review.link.url}>{this.props.review.headline} </a> by {this.props.review.byline}</h2>
                <p>{this.props.review.summary_short}</p>
            </div>
        )
    }
}

export default MovieReviews;
