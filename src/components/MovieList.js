import React, {useState, useEffect} from "react";
import Movie from "./Movie.js";
import axios from "axios";
import PopularMovie from "./PopularMovie.js";
import Header from "./Header.js"
import MovieInfor from "./MovieInfor.js";

const API_key = "5615039fc008ff1530efcac688082638";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

function launchPopularMovie(props) {
    return <PopularMovie key={props.id} id={props.id} img={IMG_URL + props.poster_path} title={props.title}/>;
}



function MovieList() {
    const [movie, setMovie] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_key + "&language=en-US&page=1";
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setMovie(response.data.results);
                console.log(movie)
            })
            .catch(err => {
                console.log("Error");
            })
    }, [url]) ;
    
    return (<div>
        <Header/>
        <section className="movies container" id="movies">
            <div className="movies-content">
                
                {movie.map(launchPopularMovie)}
            </div>
            
        </section>
    
    </div>);
    
}


export default MovieList;