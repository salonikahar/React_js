import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { RiResetLeftFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';

function Review() {
    let proData = useParams();
    let [product, setProduct] = useState({});
    let [star, setStar] = useState([1, 2, 3, 4, 5]);
    let [reviewStar, setReviewStar] = useState(-1);
    let [show, setShow] = useState(false);
    let [reviewData, setReviewData] = useState({})

    let handleClose = () => { setShow(false) }

    useEffect(() => {

        getProduct()
    }, [setProduct])

    let getReview = async () => {
        let getReviewdata = await fetch('http://localhost:3000/products/userReview')
        let ReviewData = await getReviewdata.json();
        setReviewData(ReviewData)
    }

    let getProduct = async () => {
        let proDetails = await fetch("http://localhost:3000/products/" + proData.ProductId);
        let data = await proDetails.json();
        setProduct(data);
    
        if (Array.isArray(data.userReview) && data.userReview.length > 0) {
            const latestReview = data.userReview[data.userReview.length - 1];
            setReviewData({ name: latestReview.name, feedback: latestReview.feedback });
            setReviewStar(latestReview.rating);
        } else {
            setReviewData({});
            setReviewStar(-1);
        }
    };

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setReviewData({ ...reviewData, [name]: value });
    }

    let submitReview = async (e) => {
        e.preventDefault();
    
        const newReview = {
            name: reviewData.name,
            feedback: reviewData.feedback,
            rating: reviewStar,
        };
    
        try {
            // Fetch the latest product data (in case it's changed)
            let res = await fetch(`http://localhost:3000/products/${proData.ProductId}`);
            let latestProduct = await res.json();
    
            // Ensure userReview is an array
            let existingReviews = Array.isArray(latestProduct.userReview)
                ? latestProduct.userReview
                : latestProduct.userReview
                ? [latestProduct.userReview]
                : [];
    
            // Add new review to the array
            let updatedProduct = {
                ...latestProduct,
                userReview: [...existingReviews, newReview],
            };
    
            // PUT the updated product back
            let updateRes = await fetch(`http://localhost:3000/products/${proData.ProductId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
    
            if (updateRes.ok) {
                toast.success("Review Submitted Successfully!");
                setShow(false);
                setReviewData({ name: '', feedback: '' });
                setReviewStar(-1);
                getProduct(); // Refresh the product
            } else {
                toast.error("Failed to submit review.");
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            toast.error("Something went wrong.");
        }
    };
    

    return (
        <>
            <div>
                <Button variant="dark" size="lg" onClick={() => setShow(true)} >
                    Review
                </Button>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Review Your Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form style={{ margin: '0 auto', padding: '20px' }} onSubmit={(e) => submitReview(e)} method='post'>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Enter Your Name:</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Your name" onChange={getInput} />
                            </Form.Group>

                            <Form.Group controlId="formReview" className="mb-3">
                                <Form.Label>Give Review:</Form.Label>
                                <div style={{ fontSize: '1.5rem' }}>
                                    {star.map((v, i) => (
                                        <span
                                            onClick={() => setReviewStar(i + 1)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {reviewStar > i ? (
                                                <IoIosStar color="gold" />
                                            ) : (
                                                <IoIosStarOutline color="gray" />
                                            )}
                                        </span>
                                    ))} | <RiResetLeftFill onClick={() => setReviewStar(0)} />
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formFeedback" className="mb-3">
                                <Form.Label>Give Your Feedback Here:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="feedback"
                                    placeholder="Write something..."
                                    onChange={getInput}
                                />
                            </Form.Group>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" type='submit' onClick={submitReview}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <ToastContainer />
        </>
    )
}

export default Review
