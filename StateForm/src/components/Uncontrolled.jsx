import React, { useRef } from 'react'

function Uncontrolled() {
    const inputRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Submitted Name : ${inputRef.current.value}`);
    }
  return (
    <>
    <h1>Uncontrolled Form</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name : <input type="text" ref={inputRef} />
        </label>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Uncontrolled
