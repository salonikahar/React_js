import React, { useEffect, useState } from 'react'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function ShowReview(pro) {
  let [review, setReview] = useState([]);

  useEffect(() => {
    let getReview = async () => {
      let data = await fetch("http://localhost:3000/Review/?productId=" + pro.ProductId);
      let record = await data.json();
      setReview(record)
    }
    getReview()
  }, [setReview])

  const deleteReview = async (id) => {
    try {
      let deleteData = await fetch(`http://localhost:3000/Review/${id}`, {
        method: 'DELETE',
      });
      setReview(review.filter(r => r.id !== id));

    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  let totalReviews = review.length;
  let averageRating = totalReviews
    ? (review.reduce((sum, r) => sum + r.star, 0) / totalReviews).toFixed(1)
    : 0;

  return (
    <Container className="mt-4">
      <h1 className="mb-3 text-center">Reviews</h1>

      <div
        className="d-flex justify-content-center align-items-center gap-4 mb-4"
        style={{ fontSize: "1.2rem", fontWeight: "500" }}
      >
        <p className="mb-0">
          Total Reviews: <span style={{ color: "#0d6efd" }}>{totalReviews}</span>
        </p>

        <div className="vr" /> {/* Bootstrap vertical divider */}

        <p className="mb-0">
          Average Rating:{" "}
          <span style={{ color: "orange" }}>{averageRating}</span>
        </p>
      </div>


      <Row className="g-4">
        {review.map((v, i) => (
          <Col key={i} md={6} lg={4}>
            <Card style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{v.name}</Card.Title>
                <div style={{ marginBottom: "10px" }}>
                  {[...Array(v.star)].map((_, index) => (
                    <IoIosStar
                      key={index}
                      className="fa fa-star"
                      style={{ color: "gold", fontSize: "1.2rem" }}
                    />
                  ))}
                </div>
                <Card.Text>{v.feedback}</Card.Text>
                <Button variant="danger" onClick={() => deleteReview(v.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ShowReview


