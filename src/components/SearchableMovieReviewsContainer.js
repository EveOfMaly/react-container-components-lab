import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hkCjUeuALx9iFKcyOzp7LvnDtndnBwLI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            test:"test"
        }
    }



    render(){
        return (<div></div>)
    }
}


