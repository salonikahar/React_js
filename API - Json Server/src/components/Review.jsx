import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { RiResetLeftFill } from "react-icons/ri";

function Review() {
    let proData = useParams();
    let [product, setProduct] = useState({});
    let [star, setStar] = useState([1, 2, 3, 4, 5]);
    let [reviewStar, setReviewStar] = useState(-1);
    let [show, setShow] = useState(false);
    
    
    let handleClose = () => { setShow(false) }

    useEffect(() => {

        getProduct()
    }, [setProduct])

    let getProduct = async () => {
        let proDetails = await fetch("http://localhost:3000/products/" + proData.ProductId)
        let data = await proDetails.json();
        setProduct(data)
    }

    

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

                        <form style={{ margin: '0 auto', padding: '20px' }}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Enter Your Name:</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Your name" />
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
                                />
                            </Form.Group>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={handleClose}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </>
    )
}

export default Review
