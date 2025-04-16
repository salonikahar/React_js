import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Pagination from 'react-bootstrap/Pagination';


function Product() {
  let [pro, setPro] = useState([]);
  let [search, setSearch] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


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

  let filteredProducts = pro.filter((v) =>
    search
      ? v.title?.toLowerCase().includes(search) ||
      v.category?.toLowerCase().includes(search)
      : true
  );

  let sortingByName = (e) => {
    let order = e.target.value;
    let sortedData = [...pro].sort((a, b) =>
      order === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setPro(sortedData);
  };



  let totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (v) => setCurrentPage(v);


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

      <div className="row ">
        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch className="text-secondary" />
            </span>
            <input
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Search by name & category"
              className="form-control border-start-0"
            />

          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <label className="input-group-text bg-white text-dark fw-semibold" htmlFor="sortingData">
              Sort By
            </label>
            <select
              name="sortingData"
              id="sortingData"
              className="form-select border-start-0"
              onChange={sortingByName}
            >
              <option value="">Select Sort</option>
              <option value="asc">Ascending (A - Z)</option>
              <option value="dsc">Descending (Z - A)</option>
            </select>
          </div>
        </div>


      </div>
      <Row className="justify-content-md-center">
        {currentProducts.map((v, i) => {
          return (
            <Col md='auto' className='mt-3 mb-2'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={v.image} width="150px" height="200px" />
                <Card.Body>
                  <Card.Title>{v.title.slice(0, 20)}...</Card.Title>
                  <Card.Text>
                    {v.category}
                  </Card.Text>
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
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}

    </Container>

  )
}

export default Product
