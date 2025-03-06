import React, { useState } from 'react'

function Controlled() {

    const [name,setName] = useState("");
    const handleChange = (e) =>{
        setName(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`submitted name : ${name}`);
    };


  return (
    <>
        <h1>Controlled Form</h1>
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name : <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Controlled
