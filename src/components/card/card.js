import React from "react"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    return <>
    {
        
        <Link to={`/movie/${movie.show.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={movie?.show?.image?.original}  alt="" />
                <div className="cards__overlay">
                    <div className="card__title">{movie?.show?.name}</div>
                    <div className="card__runtime">
                        {""}
                        <span className="card__rating">{""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{"..."}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards