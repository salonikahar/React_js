import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmp, editEmpData } from '../Redux/Action';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmp() {
    
    let [emp, setEmp] = useState({})
    let empData = useSelector((state) => state.empData.employee)
    let empId = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        console.log(empId)
        console.log(empData);
        setEmp(empData[empId.index]);
    }, [setEmp]);
    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setEmp({ ...emp, [name]: value })

    }

    let submitData = (e) => {
        e.preventDefault();
        dispatch(editEmpData(emp, empId.index))
        navigate('/');
    };
    return (

        <div>
            <h1>edit Employee form</h1>
            <form action="post" onSubmit={(e) => submitData(e)}>
                <table>
                    <tr>
                        <td>Name :</td>
                        <td><input type="text" name="name" onChange={(e) => getInput(e)} value={emp.name ? emp.name : ""} /></td>
                    </tr>
                    <tr>
                        <td>Age :</td>
                        <td><input type="number" name="age" onChange={(e) => getInput(e)} value={emp.age ? emp.age : ""} /></td>
                    </tr>
                    <tr>

                        <td><input type="submit" name="submit" value='edit' /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default UpdateEmp;
