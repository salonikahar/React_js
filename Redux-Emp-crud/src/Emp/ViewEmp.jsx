import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmpData } from '../Redux/Action'

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
              <td><button name='delete' onClick={() => deleteEmp(i)}>Delete</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default ViewEmp
