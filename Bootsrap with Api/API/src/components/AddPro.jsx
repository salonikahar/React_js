import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';


function AddPro() {
    let [category, setCategory] = useState([]);
    let [product, setProduct] = useState({});

    useEffect(() => {
        let getCategory = async () => {
            let getCategoryData = await fetch("https://fakestoreapi.com/products/categories")

            let categoryData = await getCategoryData.json();
            setCategory(categoryData);
        }
        getCategory();
    }, [setCategory]);

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setProduct ({...product , [name] : value});
    }
    
    let submitData = async(e) =>{
        e.preventDefault();
        console.log(product)
        let addData = await fetch("http://localhost:3000/products" , {
            method : 'post',
            body : JSON.stringify(product)
        });

        if (addData) {
            toast.success('New Product Added')
        }
        else {
            toast.error('Failed to Add Product')
        }
    }

    return (
        <Container >
            <Row className="justify-content-md-center" style={{ width: '800px', margin: '0 auto' }}>
                <Col >
                    <div >
                        <h1 style={{ textAlign: 'center' }} className='mb-5'>Add New Product Details</h1>
                        <Form onSubmit= {(e) => submitData(e)} method='post'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Category </Form.Label>
                                <Form.Select aria-label="Default select example" name='category' onChange={getInput}>
                                    <option>-select Category-</option>
                                    {category.map((v, i) => {
                                        return <option value={v}>{v}</option>;
                                    })}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title </Form.Label>
                                <Form.Control type="text" name='title' onChange={getInput} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Price </Form.Label>
                                <Form.Control type="text" name='price' onChange={getInput}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} name='description' onChange={getInput}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Image </Form.Label>
                                <Form.Control type="text" name='image' onChange={getInput}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Button type='submit'>submit</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Container>

    )
}

export default AddPro
