import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
  let [pro, setPro] = useState([])
  useEffect(() => {
    let getProducts = async () => {
      let data = await fetch("https://fakestoreapi.com/products");
      let record = await data.json();
      setPro(record)
    }
    getProducts()
  }, [setPro])

  return (
    <Container>

      <Row className='justify-content-md-center'>
        {pro.map((v, i) => {
          return (
            <Col md='auto'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={v.image} width="150px" height="200px"/>
                <Card.Body>
                  <Card.Title>{v.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    {v.description.slice(0,90)}...
                  </Card.Text>
                  <Card.Text>
                    {v.price} $
                  </Card.Text>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}


      </Row>
    </Container>
    // <div>
    //   <h1>Product list</h1>
    //   <div>
    //     {pro.map({

    //     })}
    //   </div>
    // </div>
  )
}

export default Product
