import React, { useState, useEffect} from 'react'; 
import './App.css';
import axios from 'axios'
import MovieList from './components/MovieList';

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [movies, setMovies] = useState([]); 

  const getAllMovies = async () => {
    try
    {
      const response = await axios.get(`${kBaseUrl}/movies`); 
      setMovies(response.data)
    }
    catch(error)
    {
      console.log(error); 
      
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []); 

  return (
    <div>
      <h1>Movie App</h1>
      <MovieList movies={movies}/>
    </div>
  );
};


export default App;
