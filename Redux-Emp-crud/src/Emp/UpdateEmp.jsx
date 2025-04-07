import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmp, editEmpData } from '../Redux/Action';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function UpdateEmp() {

  let [emp, setEmp] = useState({})
  const [hobby, setHobby] = useState([]);

  let empData = useSelector((state) => state.empData.employee)
  console.log(empData)
  let empId = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
  
    if (empData[empId.index].hobby) {           //  if (emp?.hobby) {
      setHobby(empData[empId.index].hobby);     //  setHobby(emp.hobby);
    }
    setEmp(empData[empId.index]);               //  setEmp(empData[empId.index]);
  }, [setEmp, setHobby]);                       // }, [setEmp , setHobby]);

  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let prevHobby = [...hobby];

    if (name === 'hobby') {
      if (e.target.checked) {
        prevHobby.push(value);
      } else {
        prevHobby = prevHobby.filter((v) => v !== value);
      }
      setHobby(prevHobby);
      console.log(prevHobby)
      setEmp({ ...emp, hobby: prevHobby });
    } else {
      setEmp({ ...emp, [name]: value });
    }
  }
  let submitData = (e) => {
    e.preventDefault();
    console.log(emp);

    dispatch(editEmpData(emp, empId.index))
    navigate('/view');
  };
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Edit Employee Form</h1>
      <Form onSubmit={(e) => submitData(e)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => getInput(e)}
              value={emp.name ? emp.name : ""}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Age:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="age"
              onChange={(e) => getInput(e)}
              value={emp.age ? emp.age : ""}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => getInput(e)}
              value={emp.email ? emp.email : ""}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Password:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="password"
              onChange={(e) => getInput(e)}
              value={emp.password ? emp.password : ""}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Gender:</Form.Label>
          <Col sm={10}>
            <Form.Check
              inline
              type="radio"
              label="Male"
              name="gender"
              value="male"
              onChange={(e) => getInput(e)}
              checked={emp.gender === "male" ? 'checked' : ''}
            />
            <Form.Check
              inline
              type="radio"
              label="Female"
              name="gender"
              value="female"
              onChange={(e) => getInput(e)}
              checked={emp.gender === "female" ? 'checked' : ''}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm={2}>Hobby:</Form.Label>
          <Col sm={10}>

            <Form.Check
              inline
              type="checkbox"
              label="Coding"
              name="hobby"
              value="coding"
              onChange={(e) => getInput(e)}
              checked={hobby.includes("coding") ? 'checked' : ''}
            />
            <Form.Check
              inline
              type="checkbox"
              label="Reading"
              name="hobby"
              value="reading"
              onChange={(e) => getInput(e)}
              checked={hobby.includes("reading") ? 'checked' : ''}
            />
            <Form.Check
              inline
              type="checkbox"
              label="Speaking"
              name="hobby"
              value="speaking"
              onChange={(e) => getInput(e)}
              checked={hobby.includes("speaking") ? 'checked' : ''}
            />
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="primary">Edit</Button>
        </div>
      </Form>
    </Container>

  )
}

export default UpdateEmp;
