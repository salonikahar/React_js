import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container, Row, Col, Card, Button, Form
} from 'react-bootstrap';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { toast } from 'react-toastify';

function SingleProduct() {
    const { ProductId } = useParams();
    const [product, setProduct] = useState({});
    const [reviewData, setReviewData] = useState({ name: '', feedback: '' });
    const [reviewStar, setReviewStar] = useState(-1);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const res = await fetch(`http://localhost:3000/products/${ProductId}`);
        const data = await res.json();
        setProduct(data);
        if (Array.isArray(data.userReview)) {
            setReviews(data.userReview);
        } else if (data.userReview) {
            setReviews([data.userReview]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    const handleStarClick = (index) => {
        setReviewStar(index + 1);
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        const newReview = {
            ...reviewData,
            rating: reviewStar,
        };

        const updatedReviews = [...reviews, newReview];

        const updatedProduct = {
            ...product,
            userReview: updatedReviews,
        };

        const res = await fetch(`http://localhost:3000/products/${ProductId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });

        if (res.ok) {
            toast.success("Review submitted successfully!");
            setReviewData({ name: '', feedback: '' });
            setReviewStar(-1);
            getProduct(); 
        } else {
            toast.error("Failed to submit review.");
        }
    };

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-uppercase border-bottom pb-2">
                Product Details
            </h1>

            <Row className="align-items-start">
                <Col md={5} className="text-center mb-4 mb-md-0">
                    <Card className="shadow-sm">
                        <Card.Img
                            variant="top"
                            src={product.image}
                            alt={product.title}
                            style={{ maxHeight: '400px', objectFit: 'contain', padding: '1rem' }}
                        />
                    </Card>
                </Col>

                <Col md={7}>
                    <h3 className="fw-bold">{product.title}</h3>
                    <h6 className="fw-bold text-capitalize">{product.category}</h6>
                    <p className="text-muted">{product.description}</p>
                    <h4 className="text-danger fw-semibold mb-4">${product.price}</h4>

                    <div className="mb-4">
                        <Button variant="dark" className='me-2'>Add to Cart</Button>
                        <Button variant="dark">Buy Now</Button>
                    </div>

                </Col>
                <Col>

                    <h4 className="mt-4 mb-3">Leave a Review</h4>
                    <Form onSubmit={handleSubmitReview}>
                        <Form.Group className="mb-3" controlId="reviewerName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={reviewData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <div className="d-flex">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <span key={i} onClick={() => handleStarClick(i)} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
                                        {i < reviewStar ? <IoIosStar color="gold" /> : <IoIosStarOutline color="gray" />}
                                    </span>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="reviewFeedback">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="feedback"
                                value={reviewData.feedback}
                                onChange={handleInputChange}
                                placeholder="Write your feedback..."
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit Review
                        </Button>
                    </Form>

                    <hr className="mt-5" />

                    <h4 className="mb-3">User Reviews</h4>
                    {reviews.length === 0 ? (
                        <p>No reviews yet.</p>
                    ) : (
                        reviews.map((review, index) => (
                            <Card key={index} className="mb-3">
                                <Card.Body>
                                    <Card.Title className="mb-2">{review.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {[...Array(5)].map((_, i) =>
                                            i < review.rating
                                                ? <IoIosStar key={i} color="gold" />
                                                : <IoIosStarOutline key={i} color="gray" />
                                        )}
                                    </Card.Subtitle>
                                    <Card.Text>{review.feedback}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default SingleProduct;
