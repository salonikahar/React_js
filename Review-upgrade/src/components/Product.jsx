import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product() {
  let [pro, setPro] = useState([])


  useEffect(() => {
    getProducts()
  }, [setPro])


  let getProducts = async () => {
    let data = await fetch("http://localhost:3000/products");
    let record = await data.json();
    setPro(record)
  }


  let deleteProData = async (id) => {
    let deleteData = await fetch("http://localhost:3000/products/" + id, {
      method: 'DELETE',
    });
    getProducts()
  }

  return (
    <Container>
      <h2 style={{
        textAlign: 'center', fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        margin: '30px 0 15px 0',
        paddingBottom: '10px',
        borderBottom: '2px solid #ddd',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>Product list</h2>
      <Row className='justify-content-md-center'>
        {pro.map((v, i) => {
          return (
            <Col md='auto' className='mt-3 mb-2'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={v.image} width="150px" height="200px" />
                <Card.Body>
                  <Card.Title>{v.title.slice(0, 20)}...</Card.Title>
                  <Card.Text>
                    {v.description.slice(0, 90)}...
                  </Card.Text>
                  <Card.Text>
                    {v.price} $
                  </Card.Text>
                  <Button variant="danger" onClick={() => deleteProData(v.id)}>Delete</Button>
                  <Link to={"/update/" + v.id} style={{ textDecoration: 'none', }}> <Button variant="success" className='ms-2'>Edit</Button></Link>
                  <Link to={"/SingleProduct/" + v.id}>
                    <Card.Text>More Details...</Card.Text >
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}


      </Row>
    </Container>

  )
}

export default Product
