import React from 'react'; 
import "./MovieCarousel.css";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material'; 

const MovieCarousel = ({movies}) => {
    return(
        <div className='movie-carousel'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return(
                            <Paper>
                                <div className = 'movie-gallery-showcase'></div>
                                    <div className="movie-image"></div>
                                        {/* <div className="movie-detail"></div> add summary info for movie */}
                                            <div className="movie-poster">
                                                <img src={movie.posterPhoto} alt=""/>
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                
                            </Paper>
                        )
                        })
                }
            </Carousel>

        </div>
    )
}

export default MovieCarousel