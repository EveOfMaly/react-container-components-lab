
import React from "react"

const Review = (props) => {

    return (<div key={props.headline} className="review">
        <h2>Display Title: {props.movie.display_title}</h2>
        <p>MPAA Rating:  {props.movie.mpaa_rating}</p>
        <p>Byline: {props.movie.byline}</p>
        <p>Headline: {props.movie.headline}</p>
        <p>Summary Short: {props.movie.summary_short}</p>
        <br></br>
    </div>
    )
}

export default Review
 