import React from 'react'

import FindTour from './FindTour'

import './SearchResults.css'

function SearchResults() {
   return (
      <div className='searchResults'>
         <div className="searchResultTitle">
            <h1>Search Results</h1>
         </div>
         <div className="findResults">
            <FindTour />
            <FindTour />
            <FindTour />
            <FindTour />
            <FindTour />
            <FindTour />
         </div>
      </div>
   )
}

export default SearchResults