import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowReview() {
    const ProductId  = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    let getProduct = async () => {
        try {
            let res = await fetch(`http://localhost:3000/products/` +
              ProductId.ProductId
            );
            let data = await res.json();
            setProduct(data);

            if (Array.isArray(data.userReview)) {
                setReviews(data.userReview);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    return (
        <div className="container">
            <h1>{product.title} - Reviews</h1>
            {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to leave a review!</p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.name}</strong> - {review.rating} Stars
                            <p>{review.feedback}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ShowReview;
