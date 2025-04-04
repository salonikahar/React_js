import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmpData } from '../Redux/Action'
import { Link } from 'react-router-dom'

function ViewEmp() {
  let emp = useSelector((state) => state.empData.employee)
  let dispatch = useDispatch()

  let deleteEmp = (pos) => {
    dispatch(deleteEmpData(pos))
  }



  return (
    <div>
      <h1>Employee Data</h1>
      <table border="">
        <tr>
          <td>name</td>
          <td>age</td>
          <td>Actions</td>
        </tr>
        {emp.map((v, i) => {
          return (
            <tr>
              <td>{v.name}</td>
              <td>{v.age}</td>
              <td>
                <button onClick={() => deleteEmp(i)}>Delete</button>
                <button>
                  <Link to={"/edit/" + i}> Update</Link>
                </button>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default ViewEmp
