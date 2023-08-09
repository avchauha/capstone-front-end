import React, {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom'; 


const ReviewsForm = ({ handleReviewSubmit, loadReviews }) => {
    // Get the movieId from the URL using the useParams hook
    const { movieId } = useParams(); 

    // Initialize state to store the review body and existing reviews
    const [reviewFormData, setReviewFormData] = useState(" ");
    const [movieReviews, setReviews] = useState([]); 

    // Load existing reviews when the component mounts using the loadReviews function
    useEffect(() => {
        loadReviews(movieId, setReviews);
    }, []); 

    // Handle input change when typing the review text
    const handleInputChange = (event) => {
        event.preventDefault();
        // Call the handleReviewSubmit function to submit review
        handleReviewSubmit(movieId, reviewFormData, setReviews);
        // Clear the review body input
        setReviewFormData(''); 
    }

    // Render the review submission form and existing reviews
    return(
        <div className="container">
            <div className='mb-3'>
                <label htmlFor='reviewInput' className='form-label'>
                    Write your review! 
                </label>
                <textarea
                    id='reviewTextArea'
                    className='form-control'
                    rows={4}
                    value={reviewFormData}
                    onChange={(event) => setReviewFormData(event.target.value)}
                />
            </div>
            <button className='btn btn-outline-info' onClick={handleInputChange}>
                Submit
            </button>
            <div>
                <p>Reviews</p>
                    {
                        movieReviews.map((movieReview) => {
                            return (
                                <div>
                                    <h3>{movieReview.body}</h3>
                                </div>
                            )
                        })
                    }
            </div>
            
        </div>
    );
};

export default ReviewsForm