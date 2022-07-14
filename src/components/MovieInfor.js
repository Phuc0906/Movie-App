import React, { useEffect, useState } from "react";
import Header from "./Header.js"
import axios from "axios";

function MovieInfor(props) {
    console.log(props.id)
    const API_key = "5615039fc008ff1530efcac688082638";
    const IMG_URL = "https://image.tmdb.org/t/p/w500";

    const [movie, setMov] = useState([])
    const url = "https://api.themoviedb.org/3/movie/" + props.id + "?api_key=" + API_key + "&language=en-US&page=1";

    useEffect(() => {
        axios.get(url)
            .then(response => {
                
                console.log(response.data.backdrop_path)
                setMov(response.data);
            

            })
            .catch(err => {
                console.log("Error");
            })
    }, []) ;
    console.log(IMG_URL + movie.backdrop_path)
    return (
        <div>
            <Header/>
            <div className="play-container container">
                <img src={IMG_URL + movie.backdrop_path} alt="" className="play-img"/>
            

                <div className="play-text">
                    <h2>{movie.original_title}</h2>
                
                    
                    <div className="tag">
                        {/* {movieGen.map(rendingGenre)} */}
                        <span>Rating: {movie.vote_average}</span>
                    </div>
                    
                    <a href="#" className="watch-btn">
                        <i className='bx bxs-right-arrow play-movie'></i>
                        <span>Watch The Trailer</span>
                    </a>
                    
                </div>
            </div>
        </div>
        
    )
}


export default MovieInfor;