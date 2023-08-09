import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <div>
            <h2> Movies List </h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.genres}</p>
                        <p>{movie.releaseDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;