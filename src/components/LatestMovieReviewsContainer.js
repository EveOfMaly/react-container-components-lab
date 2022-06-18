import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'hkCjUeuALx9iFKcyOzp7LvnDtndnBwLI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews:[]
        }
    }


    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({ reviews: response.results }));
    }


    // renderLatestMovies = () => {
    //     return (this.state.reviews.map((review) =>  <div className='latest-movie-reviews'>{review}</div>))
    // }


    render(){
        return (
            <div className='latest-movie-reviews'>
                <h2>Latest Review</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

