import React from "react";
import { Link } from "react-router-dom";

function MovieNavBar() {
    return (
        <div className="nav container">
            <Link to={"/"} className="logo">
                Rmit<span>MovieTrailer</span>
            </Link>
            
            <div className="search-box">
                <input type="search" name="" id="search-input" placeholder="Search movie"/>
                <i className='bx bx-search-alt-2' ></i>
            </div>
            
            <a href="#" className="user">
                <img src="img/rmit.jpg" alt="" className="user-img"/>
            </a>
            
            <div className="navbar">
                <a href="#home" className="nav-link nav-active ">
                    
                        <i className='bx bx-home'></i>
                            <span className="nav-link-title">Home</span>
                     
                </a>

                <a href="#popular" className="nav-link  ">
                    <i className='bx bxs-hot' ></i>
                        <span className="nav-link-title">Trending</span>
                </a>

                <a href="#movies" className="nav-link  ">
                    <i className='bx bx-compass'></i>
                        <span className="nav-link-title">Explore</span>
                </a>

                <a href="play-trailer-WelcomtoJungle.html" className="nav-link  ">
                        <i className='bx bx-tv'></i>
                            <span className="nav-link-title">Movies</span>
                </a>

                <a href="#home" className="nav-link  ">
                    <i className='bx bx-heart'></i>
                        <span className="nav-link-title">Favorite</span>
                </a>
            </div>
        </div>
    )
}


export default MovieNavBar;