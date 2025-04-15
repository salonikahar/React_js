import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { RiResetLeftFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';

function Review(pro) {
    let proData = useParams();
    let [star, setStar] = useState([1, 2, 3, 4, 5]);
    let [reviewStar, setReviewStar] = useState(-1);
    let [show, setShow] = useState(false);
    let [review, setReview] = useState({});
    let [allReview, setAllReview] = useState([])

    let handleClose = () => { setShow(false) }

    useEffect(() => {
        let getReview = async () => {
            let productReview = await fetch("http://localhost:3000/Review/?productId=" + pro.ProductId);

            let data = await productReview.json();
            setAllReview(data)
        }
        getReview();
    }, [setAllReview])


    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setReview({ ...review, [name]: value })
    }

    let submitReview = async (e) => {
        e.preventDefault();
        let obj = { ...review, ['star']: reviewStar, productId: pro.ProductId }
        console.log(obj);

        let addReview = await fetch("http://localhost:3000/Review", {
            method: "post",
            body: JSON.stringify(obj)
        }
        )
        toast.success("add review");
    }

    return (
        <>
            <div>
                <Button variant="dark"
                    className="px-4 py-2"
                    style={{ borderRadius: "8px", fontWeight: "500" }}
                    onClick={() => setShow(true)} >
                    Give your Review Here
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
