import React, { useEffect, useState } from 'react'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { Card, Container, Row, Col } from "react-bootstrap";

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
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
    )
}

export default ShowReview


// function Product() {
//   let [pro, setPro] = useState([])


//   useEffect(() => {
//     getProducts()
//   }, [setPro])


//   let getProducts = async () => {
//     let data = await fetch("http://localhost:3000/products");
//     let record = await data.json();
//     setPro(record)
//   }


//   let deleteProData = async (id) => {
//     let deleteData = await fetch("http://localhost:3000/products/" + id, {
//       method: 'DELETE',
//     });
//     getProducts()
//   }

//   return (
//     <Container>
//       <h2 style={{
//         textAlign: 'center', fontSize: '2rem',
//         fontWeight: 'bold',
//         color: '#333',
//         margin: '30px 0 15px 0',
//         paddingBottom: '10px',
//         borderBottom: '2px solid #ddd',
//         textTransform: 'uppercase',
//         letterSpacing: '1px'
//       }}>Product list</h2>
//       <Row className='justify-content-md-center'>
//         {pro.map((v, i) => {
//           return (
//             <Col md='auto' className='mt-3 mb-2'>
//               <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={v.image} width="150px" height="200px" />
//                 <Card.Body>
//                   <Card.Title>{v.title.slice(0, 20)}...</Card.Title>
//                   <Card.Text>
//                     {v.description.slice(0, 90)}...
//                   </Card.Text>
//                   <Card.Text>
//                     {v.price} $
//                   </Card.Text>
//                   <Button variant="danger" onClick={() => deleteProData(v.id)}>Delete</Button>
//                   <Link to={"/update/" + v.id} style={{ textDecoration: 'none', }}> <Button variant="success" className='ms-2'>Edit</Button></Link>
//                   <Link to={"/SingleProduct/" + v.id}>
//                     <Card.Text>More Details...</Card.Text >
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           )
//         })}


//       </Row>
//     </Container>

//   )
// }

// export default Product