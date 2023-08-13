import React from 'react'; 
import "./MovieCarousel.css";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";

// MovieCard component
const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.movieId}/reviews`} className='="movie-card-link'>
            <Paper className="movie-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .2)), url(${movie.backdropPhotos[0]})` }}>
                <div className="movie-poster">
                    <img src={movie.posterPhoto} alt=""/>
                </div>
                <div className='movie-title'>
                    <p>{movie.title}</p>
                </div>
                <div className="movie-buttons-container">
                    <Link to={`/Trailer/${movie.trailer.substring(movie.trailer.length - 11)}`}>
                        <div className="play-button-icon-container">
                            <FontAwesomeIcon className="play-button-icon" icon={faCirclePlay} />
                        </div>
                    </Link>
                </div>
            </Paper>
        </Link>
    );  
}

const MovieCarousel = ({ movies }) => {
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </Carousel>
        </div>
    );
}

export default MovieCarousel;
