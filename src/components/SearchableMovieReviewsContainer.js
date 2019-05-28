import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }


    }

    buildSearchUrl = (event) => {
        event.preventDefault()
        this.clearHtml()

        let searchTerm = event.target.elements[0].value
        console.log(searchTerm)
        this.setState({searchTerm}, () => {
            fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=`)
            .then(response => response.json())
            .then(movies => {
                console.log(movies)
                this.setState({reviews: movies.results}, () => console.log(this.state.reviews))
            })
        })        
    }

    clearHtml = () => {
        
        let parentDiv = document.getElementsByClassName('latest-movie-reviews')
        if (parentDiv[0].children.length > 0) {
            if (parentDiv[0].firstChild !== undefined) {
                while (parentDiv[0].firstChild) {
                    console.log(parentDiv[0].firstChild)
                    parentDiv[0].firstChild.remove()
                }
            }
        }
    }

    render(){
        return (
            <div className="searchable-movie-reviews">

                <form onSubmit={this.buildSearchUrl}>
                    <input type="text" name="search-term"></input>
                    <input type="submit" name="submit" value="Search Movies"></input>
                </form>

                {this.state.reviews.map(movie => {
                    // console.log(movie)
                return <MovieReviews key={movie.display_title} movie={movie} />
            })}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
