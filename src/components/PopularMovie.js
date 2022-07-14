import React from "react";
import {Link} from "react-router-dom";


function PopularMovie(props) {
    return (
        
        <div className="movie-box">
            
            <img src={props.img} alt="" className="movie-box-img"/> 
            <div className="box-text">
                <h2 className="movie-title">{props.title}</h2>
                <Link to={"/"  + props.id  } className="watch-btn play-btn">
                    <i className='bx bxs-right-arrow'></i>
                    
                </Link>
            </div>  
        </div>
        
        
    )
}

export default PopularMovie;