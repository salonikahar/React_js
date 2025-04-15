import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container, Row, Col, Card, Button, Form
} from 'react-bootstrap';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { toast } from 'react-toastify';
import Review from './Review';
import ShowReview from './showReview';

function SingleProduct() {
    let Prodata = useParams();
    let [product, setProduct] = useState({});

    useEffect(() => {
        getProduct();
    }, [setProduct]);

    let getProduct = async () => {
        let res = await fetch('http://localhost:3000/products/' + Prodata.ProductId);
        let data = await res.json();
        setProduct(data);

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

                    <div
                        className="d-flex flex-wrap align-items-center gap-3 mb-4"
                        style={{ marginTop: "20px" }}
                    >
                        <Button
                            variant="dark"
                            className="px-4 py-2"
                            style={{ borderRadius: "8px", fontWeight: "500" }}
                        >
                            Add to Cart
                        </Button>

                        <Button
                            variant="warning"
                            className="px-4 py-2 text-dark"
                            style={{ borderRadius: "8px", fontWeight: "500" }}
                        >
                            Buy Now
                        </Button>

                        <Review ProductId={Prodata.ProductId} />
                    </div>


                </Col>
                <Col>
                    <ShowReview ProductId={Prodata.ProductId} />

                </Col>
            </Row>
        </Container>
    );
}

export default SingleProduct;
