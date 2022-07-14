import React, {useState, useEffect}  from "react";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail"
import axios from "axios";
import GetSingleMov from "./GetSingleMov"
import MovieInfor from "./MovieInfor";

const API_key = "5615039fc008ff1530efcac688082638";
const IMG_URL = "https://image.tmdb.org/t/p/w500";


{/* <MovieDetail poster_path={props.backdrop_path} mov_genre={props.genre_ids} title={props.title} vote={props.vote_average}/> */}


function mappingRoute(props) {
    
    return <Route key={props.id} path={"/"  + props.id } element={<MovieInfor id={props.id}/>}/>
}



function RouteGenerator() {
    const [movie, setMovie] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_key + "&language=en-US&page=1";
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setMovie(response.data.results);
                console.log(response.data.results)
            })
            .catch(err => {
                console.log("Error");
            })
    }, [url]) ;

    return (
        <BrowserRouter>
      
            <Routes>
                
                <Route path="/" element={<MovieList/>}/>
                {movie.map(mappingRoute)}
                <Route path="/:movId" element={<GetSingleMov/>}/>
            </Routes>
    
        </BrowserRouter>
    );
}


export default RouteGenerator;