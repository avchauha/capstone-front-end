import React, { useState, useEffect} from 'react'; 
import { Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Layout from './components/Layout';
import HomePage from './components/HomePage/HomePage';
import ReviewsForm from './components/ReviewsForm/ReviewsForm';

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  // Initialize state to store the list of movies
  const [movies, setMovies] = useState([]); 

  // Load reviews for a specific movie using the movieId and setReviews function 
  const loadReviews = async (movieId, setReviews) => {
    try
    {
      const response = await axios.get(`${kBaseUrl}/movies/${movieId}/reviews`); 
      setReviews(response.data.reviews)
    }
    catch(error)
    {
      console.log(error); 
    }
  };

  // Fetch all movies from backend 
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

  // Submit a review for a movie and update the reviews state
  const handleReviewSubmit = async (movieId, reviewText, setReviews) => {
    try {
      const response = await axios.post(`${kBaseUrl}/movies/${movieId}/reviews`, { reviewBody: reviewText });
    
      console.log('Review submitted successfully!', response.data); 
      setReviews((prev) => [...prev, response.data])
    
    } catch (error) {
      console.error('Error submitting review:', error); 
    }
  }

  // Fetch all movies when component mounts 
  useEffect(() => {
    getAllMovies();
  }, []); 


  return (
    <div className='ReelRatingsApp'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage movies={movies}/>} ></Route>
          <Route path="/movies/:movieId/reviews" element={<ReviewsForm handleReviewSubmit={handleReviewSubmit}
          loadReviews={loadReviews} />}/>
        </Route>
      </Routes>
    </div>
  );
};


export default App;
