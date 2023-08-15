import React, {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom'; 
import "./ReviewsForm.css"
import { FaStar } from "react-icons/fa"

const kBaseUrl = "http://localhost:8080";

const ReviewsForm = ({ handleReviewSubmit, loadReviews }) => {
    // Get the movieId from the URL using the useParams hook
    const { movieId } = useParams(); 

    // Variables for movie data and poster URL
    const [movieData, setMovieData] = useState({}); 
    const [posterURL, setPosterUrl] = useState("")

    // Initialize state to store the review body and existing reviews
    const [reviewFormData, setReviewFormData] = useState("");
    const [movieReviews, setReviews] = useState([]); 

    // Constants for star ratings
    const [currentStarValue, setStarCurrentValue] = useState(0); 
    const [hoverValue, setHoverValue] = useState(undefined); 
    const stars = Array(5).fill(0)


    // Load existing reviews when the component mounts using the loadReviews function
    useEffect(() => {
        loadReviews(movieId, setReviews);
    }, [loadReviews,movieId]); 

    // Load photos 

    useEffect(() => {
        const fetchMovieData = async() => {
            const response = await fetch(`${kBaseUrl}/movies/${movieId}/reviews`);
            const data = await response.json(); 

            setMovieData(data); 
            setPosterUrl(data.posterPhoto);
        }

        fetchMovieData();
    }, [movieId])

    // Handle input change when typing the review text
    const handleInputChange = (event) => {
        event.preventDefault();
        // Call the handleReviewSubmit function to submit review
        handleReviewSubmit(movieId, reviewFormData, setReviews, currentStarValue);
        // Clear the review body input
        setReviewFormData(''); 
    }

    const handleClick = value => {
        setStarCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    }; 

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    // Render the review submission form and existing reviews
    return(

        <div className="container">
            <div className='flex-container'>
                <div className="movie-review-poster">
                    <img src={posterURL} alt={`${movieData.title}`} />
                </div>
                <div className='movie-info-container'>
                    <div className='movie-info text-light'>
                        <h2>{movieData.title}</h2>
                        <div className= "genres">{movieData.genres && movieData.genres.map((genre, index) => (<span key={index} className='genre-oval'>{genre}</span>
                        ))}
                        </div>
                        <p className="movie-summary">{movieData.summary}</p>
                    </div>
                </div>
            </div>
            <div className='mb-3'>
                <div className="stars">
                    {stars.map((_, index) => (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentStarValue) > index ? "orange" : "grey"}
                            style={{
                                marginRight: 10,
                                cursor: "pointer",
                                marginBottom: "20px"
                            }}
                        />
                    ))}
                </div>

                <textarea
                    id='reviewTextArea'
                    placeholder='Write your review!'
                    className='form-control'
                    rows={4}
                    value={reviewFormData}
                    onChange={(event) => setReviewFormData(event.target.value)}
                />
            </div>
            <button className='btn btn-outline-light' onClick={handleInputChange}>
                Submit
            </button>
            <div>
                <p>Reviews</p>
                {console.log(movieReviews)}
                    {
                        movieReviews.map((movieReview) => {
                            return (
                                <div key={movieReview.id} className="review-container white-text">
                                    <div className="star-rating">Rating:  {[...Array(movieReview.stars)].map((_, index) => (
                                        <FaStar key={index} size={16} color="gold" />
                                        ))}
                                    </div>
                                    <p>{movieReview.body}</p>
                                </div>
                            )
                        })
                    }
            </div>     
        </div>
    );
};

export default ReviewsForm