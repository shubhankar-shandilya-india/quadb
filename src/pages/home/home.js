import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";


  

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPopularMovies(data)})
    }, [])

    return (
        <>
            <div className="poster">
                {}
                <MovieList
               movieList = {popularMovies} 
                />
            </div>
        </>
    )
}

export default Home