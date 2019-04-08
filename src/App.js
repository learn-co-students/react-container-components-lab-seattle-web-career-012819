import React, { Component } from 'react'

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';


export default class App extends Component {

  render() {
     return (
      <div className="app">
        <h1 className="nyt">NYT Movie Review Search</h1>  
        <SearchableMovieReviewsContainer />
        <LatestMovieReviewsContainer />
      </div>
     )
  }
}