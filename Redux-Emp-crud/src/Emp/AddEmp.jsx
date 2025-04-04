import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmp } from '../Redux/Action';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function AddEmp() {
    let [emp, setEmp] = useState({})
    let [hobby, setHobby] = useState([]);
    let empData = useSelector((state) => state.empData.employee)
    let dispatch = useDispatch();

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let prevHobby = [...hobby];

        if (name == 'hobby') {
            if (e.target.checked) {
                prevHobby.push(value);
            }
            else {
                prevHobby = prevHobby.filter((v, i) => v !== e.target.value)

            }
        }
        setHobby(prevHobby);

        if (name == 'hobby') {
            setEmp({ ...emp, ['hobby']: prevHobby })
        }
        else {
            setEmp({ ...emp, [name]: value })
        }
    }

    // setEmp({ ...emp, [name]: value })



    let submitData = (e) => {
        e.preventDefault();
        dispatch(addEmp(emp))
        setEmp({})
        setHobby([]);
    }
    return (

        <Container className="mt-5">
        <h2 className="mb-4">Add Employee</h2>
        <Form onSubmit={submitData}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={emp.name || ''}
                    onChange={getInput}
                    placeholder="Enter name"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="number"
                    name="age"
                    value={emp.age || ''}
                    onChange={getInput}
                    placeholder="Enter age"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={emp.email || ''}
                    onChange={getInput}
                    placeholder="Enter email"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={emp.password || ''}
                    onChange={getInput}
                    placeholder="Enter password"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={getInput}
                        checked={emp.gender == "male" ? 'checked' : ''}
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={getInput}
                        checked={emp.gender == "female" ? 'checked' : ''}
                    />
                </div>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Hobby</Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Coding"
                        name="hobby"
                        type="checkbox"
                        value="coding"
                        onChange={getInput}
                        checked={hobby.includes("coding") ? "checked" : ""}
                    />
                    <Form.Check
                        inline
                        label="Reading"
                        name="hobby"
                        type="checkbox"
                        value="reading"
                        onChange={getInput}
                        checked={hobby.includes("reading") ? "checked" : ""}
                    />
                    <Form.Check
                        inline
                        label="Speaking"
                        name="hobby"
                        type="checkbox"
                        value="speaking"
                        onChange={getInput}
                        checked={hobby.includes("speaking") ? "checked" : ""}
                    />
                </div>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>

        // <div>
        //     <form action="post" onSubmit={(e) => submitData(e)}>
        //         <table>
        //             <tr>
        //                 <td>Name :</td>
        //                 <td><input type="text" name="name" value={emp.name || ''} onChange={(e) => getInput(e)} /></td>
        //             </tr>
        //             <tr>
        //                 <td>Age :</td>
        //                 <td><input type="number" name="age" value={emp.age || ''} onChange={(e) => getInput(e)} /></td>
        //             </tr>
        //             <tr>
        //                 <td>Email :</td>
        //                 <td><input type="text" name="email" value={emp.email || ''} onChange={(e) => getInput(e)} /></td>
        //             </tr>
        //             <tr>
        //                 <td>Password : </td>
        //                 <td><input type="password" name="password" value={emp.password || ''} onChange={(e) => getInput(e)} /></td>
        //             </tr>
        //             <tr>
        //                 <td>Gender :</td>
        //                 <td><input type="radio" name="gender" value='male' onChange={(e) => getInput(e)} checked={emp.gender == "male" ? 'checked' : ''} />Male
        //                     <input type="radio" name="gender" value='female' onChange={(e) => getInput(e)} checked={emp.gender == "female" ? 'checked' : ''} />Female</td>
        //             </tr>
        //             <tr>
        //                 <td>Hobby :</td>
        //                 <td><input type="checkbox" name="hobby" value='coding' onChange={(e) => getInput(e)} checked={hobby.includes("Coding") ? "checked" : ""} />Coding
        //                     <input type="checkbox" name="hobby" value='reading' onChange={(e) => getInput(e)} checked={hobby.includes("reading") ? "checked" : ""}/> Reading
        //                     <input type="checkbox" name="hobby" value='speaking' onChange={(e) => getInput(e)}checked={hobby.includes("speaking") ? "checked" : ""}/>Speaking</td>
        //             </tr>
        //             <tr>

        //                 <td><input type="submit" name="submit" /></td>
        //             </tr>
        //         </table>
        //     </form>
        // </div>
    )
}

export default AddEmp
