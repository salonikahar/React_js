import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddData() {
  

  let [form, setForm] = useState({});

  let getInput = (e) => {
    let { name, value, type, checked } = e.target;
    let inputValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: inputValue }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/users', form);
      toast.success('User added successfully!');
      setForm(initialFormState);
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error('Failed to add user');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'phone', 'image'].map((v) => (
          <div className="mb-3" key={v}>
            <label className="form-label" htmlFor={v}>{v.toUpperCase()}</label>
            <input
              type={
                v === 'email' ? 'email' :
                v === 'phone' ? 'tel' :
                v === 'image' ? 'url' : 'text'
              }
              id={v}
              name={v}
              className="form-control"
              placeholder={v.toUpperCase()}
              value={form[v]}
              onChange={getInput}
              required
              minLength={v === 'name' ? 3 : undefined}
              pattern={
                v === 'phone' ? '\\d+' :
                v === 'image' ? 'https?://.+' : undefined
              }
            />
          </div>
        ))}

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="status"
            checked={form.status}
            onChange={getInput}
            id="status"
          />
          <label className="form-check-label" htmlFor="status">Status</label>
        </div>

        <button type="submit" className="btn btn-success">Add</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddData;
