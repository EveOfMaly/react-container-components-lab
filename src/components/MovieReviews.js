// // Code MovieReviews Here
import React from "react"

const Review = ({display_title, mpaa_rating, byline, headline, summmary_short, link}) => {

    
    return(<div key={headline} className="review">

    <header>
        <a className="review-list" href={link.url}>{headline}</a>   
        <p>{display_title}</p>
        <p>{mpaa_rating}</p>
        <p>{byline}</p>
        <p>{headline}</p>
        <p>{summmary_short}</p>
    </header>
    </div>)
}

 const MovieReviews = ({reviews}) => { <div className="review-list">{reviews.map(Review)}</div>}
 

 MovieReviews.defaultProps = {
    reviews: []
 }
 
 export default MovieReviews;




// // import Review from "./Review"

// const Review = (props) => {

//     return (<div key={props.movie.display_title} className="review">
//         <h2>Display Title: {props.movie.display_title}</h2>
//         <p>MPAA Rating:  {props.movie.mpaa_rating}</p>
//         <p>Byline: {props.movie.byline}</p>
//         <p>Headline: {props.movie.headline}</p>
//         <p>Summary Short: {props.movie.summary_short}</p>
//         <br></br>
//     </div>
//     )

// }




//  const MovieReviews = ({reviews}) => { <div className="review-list">{reviews.map((movie) => <Review movie={movie} /> )}</div>}
 
//         // return(
//         //     <div className="review-list">{reviews.map((movie, idx) => <Review movie={movie} idx={idx}/> )}</div>
//         // )



// export default MovieReviews
