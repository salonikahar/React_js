import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowReview() {
    const ProductId = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getProduct();
    }, [setReviews]);

    let getProduct = async () => {
        try {
            let res = await fetch(`http://localhost:3000/products/` + ProductId.ProductId);
            let data = await res.json();
            setProduct(data);

            if (Array.isArray(data.userReview)) {
                setReviews(data.userReview);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const deleteReview = async (id) => {
        try {
            await fetch(`http://localhost:3000/products/` + ProductId.ProductId, {
                method: 'DELETE',
            });
            setReviews(reviews.filter(r => r.id !== id)); // Optimistically update UI
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };


    return (
        <div className="container">
            <h1>{product.title} - Reviews</h1>
            {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to leave a review!</p>
            ) : (
                <ul>
                    {reviews.map((v, i) => (
                        <li >
                            <strong>{v.name}</strong> - {v.rating} Stars
                            <p>{v.feedback}</p>

                        </li>

                    ))}
                </ul>
            )}
            <Button variant="danger" onClick={() => deleteReview(v.id)}>Delete</Button>
        </div>
    );
}

export default ShowReview;
