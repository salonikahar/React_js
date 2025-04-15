import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function UpdatePro() {
    let [category, setCategory] = useState([]);
    let [product, setProduct] = useState({});
    let productData = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getSinglePro();
        getCategory();
    }, [setCategory, setProduct]);

    let getCategory = async () => {
        let getCategoryData = await fetch("https://fakestoreapi.com/products/categories")

        let categoryData = await getCategoryData.json();
        setCategory(categoryData);
    }

    let getSinglePro = async () => {
        let singleproData = await fetch("http://localhost:3000/products/" + productData.ProductId)
        let details = await singleproData.json()
        setProduct(details)
    }

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setProduct({ ...product, [name]: value });
    }

    let submitData = async (e) => {
        e.preventDefault();

        let updateData = await fetch("http://localhost:3000/products/" + productData.ProductId, {
            method: "put",
            body: JSON.stringify(product)
        });

        if (updateData.ok) {
            toast.success("Product updated successfully");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
            toast.error("Failed to update product");
            console.error("Update failed:", await updateData.text());
        }
    }

    return (
        <Container >
            <Row className="justify-content-md-center" style={{ width: '800px', margin: '0 auto' }}>
                <Col >
                    <div >
                        <h1 style={{ textAlign: 'center' }} className='mb-5'>Update Product Details</h1>
                        <Form onSubmit={(e) => submitData(e)} method='post'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Category </Form.Label>
                                <Form.Select aria-label="Default select example" name='category' onChange={getInput}>
                                    <option>-select Category-</option>
                                    {category.map((v, i) => {
                                        return <option value={v} selected={v === product.category ? product.category : " "}>{v}</option>;
                                    })}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title </Form.Label>
                                <Form.Control type="text" name='title' onChange={getInput} value={product.title ? product.title : ""} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Price </Form.Label>
                                <Form.Control type="text" name='price' onChange={getInput} value={product.price ? product.price : ""} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} name='description' onChange={getInput} value={product.description ? product.description : ""} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Image </Form.Label>
                                <Form.Control type="text" name='image' onChange={getInput} value={product.image ? product.image : ""} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Button type='submit'>Update</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
            <ToastContainer/>
        </Container>

    )
}

export default UpdatePro;