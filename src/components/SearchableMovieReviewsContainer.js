import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'hkCjUeuALx9iFKcyOzp7LvnDtndnBwLI';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews:[],
            searchTerm: ""
        }
    }

    onChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }
    

 
    

    onSubmit = (event) => {
        event.preventDefault();

     fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  };


    render(){
        return (<div>
                    <form onSubmit={event => this.onSubmit(event)}>
                    <input onChange={event => this.onChange(event)} value={this.state.input} name="searchTerm"></input>
                    <button>Search</button>
                    </form>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            
            )
            
    }
}


