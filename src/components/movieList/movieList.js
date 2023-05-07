import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = ({movieList}) => {
    
    return (
        <div className="movie__list">
            <h2 className="list__title">{("POPULAR MOVIES").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie, index) => (
                        <Cards
                        key={index}
                        movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList