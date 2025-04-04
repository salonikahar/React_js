import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmp } from '../Redux/Action';

function AddEmp() {
    let[emp, setEmp] = useState({})
    let empData = useSelector((state)=> state.empData.employee )
    console.log(empData);
    let dispatch = useDispatch();

        let getInput =(e) => {
            let name = e.target.name;
            let value = e.target.value;

            setEmp({...emp , [name]: value})

        }

        let submitData =(e) => {
            e.preventDefault();
            dispatch(addEmp (emp))
            setEmp({})
        }
    return (
           
    <div>
        <form action="post" onSubmit={(e) => submitData(e)}>
            <table>
                <tr>
                    <td>Name :</td>
                    <td><input type="text" name="name" onChange={(e) => getInput(e)} /></td>
                </tr>
                <tr>
                    <td>Age :</td>
                    <td><input type="number" name="age" onChange={(e) => getInput(e)} /></td>
                </tr>
                <tr>

                    <td><input type="submit" name="submit" /></td>
                </tr>
            </table>
        </form>
    </div>
    )
}

export default AddEmp
