import React from "react";

function Movie(props) {
    return (
        <div>
            <p>Movie title {props.title}</p>
            <p>overview {props.overview}</p>
            <p>Date update {props.date}</p>
            <img src={props.img} alt="movie image" />
        </div>
    )
}

export default Movie;