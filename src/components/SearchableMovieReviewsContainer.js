import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KGdxYA8fcGNZ3eArIsSG5AR6xr8ZN87G';
const Search_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      filteredReviews: [],
      searchName: ''
    }
  }

  handleSearch = (ev) =>{
    this.setState({
      searchName: ev.target.value
    })
    console.log(Search_URL + `${this.state.searchName}`)
  }

  handleSearchForm = (ev)=>{
    ev.preventDefault();
    fetch(Search_URL + `${this.state.searchName}`)
    .then(resp => resp.json())
    .then(json =>{
      this.setState({
        filteredReviews: json.results
      })
      //console.log(this.state.filteredReviews)
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSearchForm}>
          <label>Search Movie Reviews</label>
          <input type='text' onChange={this.handleSearch}/>
          <button type='submit'>Submit</button>
        </form>
        '*************************************************'
        <MovieReviews reviews={this.state.filteredReviews}/>
        '*************************************************'
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
