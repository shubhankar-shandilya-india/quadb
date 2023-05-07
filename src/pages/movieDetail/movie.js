import React, { useEffect, useState } from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

 function removeHtmlTags(str) {
    return str?.replace(/<[^>]*>/g, '');
  }

const Movie = () => {
    const [movieData, setMovie] = useState([])
    const { id } = useParams()
    const [currMovie, setCurrMovie] = useState()
    useEffect(() => {
        console.log(id)
        getData()
        window.scrollTo(0, 0)
    }, [])

    const findMovieById = (id, movies) =>{

        console.log('here', id)
        for (let i = 0; i < movies.length; i++) {
            console.log(movies[i].show.id)
            if (movies[i].show.id == id) {
              return movies[i];
            }
          }
         
    }

    const getData = () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
                setCurrMovie(findMovieById(id, data))

            })
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currMovie?.show.image.original} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={currMovie?.show.image.original} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currMovie?.show.name}</div>
                        <div className="movie__tagline">{movieData ? movieData.tagline : ""}</div>
                        <div className="movie__rating">
                            {movieData ? currMovie?.show.id : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{movieData ? "(" + currMovie?.show.id + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime">{movieData ? movieData.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{movieData ? "Release date: " : ""}</div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Description</div>
                        <div>{removeHtmlTags(currMovie?.show?.summary)}</div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Movie