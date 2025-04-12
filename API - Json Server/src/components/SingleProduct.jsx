import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Review from './Review';

function SingleProduct() {
    let ProData = useParams();
    let [product, setProduct] = useState({});
    let [category, setCategory] = useState([]);
   
    useEffect(() => {
        getCategory()
        getProduct()
    }, [setProduct, setCategory]);

    let getCategory = async () => {
        let getCategoryData = await fetch("https://fakestoreapi.com/products/categories")

        let categoryData = await getCategoryData.json();
        setCategory(categoryData);
    }
    let getProduct = async () => {
        let proDetails = await fetch("http://localhost:3000/products/" + ProData.ProductId)
        let Data = await proDetails.json();
        setProduct(Data)
    }

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

                <Col md={7} className="d-flex flex-column" >
                    <h3 className="fw-bold">{product.title}</h3>
                    <h6 className="fw-bold">{product.category}</h6>
                    <p className="text-muted">{product.description}</p>
                    <h4 className="text-danger fw-semibold mb-4">${product.price}</h4>

                    <div className="mt-auto">
                        <Button variant="dark" className='mx-1' >
                            Add to Cart
                        </Button>
                        <Button variant="dark" className='mx-1'>
                            Buy Now
                        </Button>
                    </div>
                    <div className='mt-5'>
                        <Review/>
                    </div>
                </Col>

            </Row>
        </Container >
    )
}

export default SingleProduct