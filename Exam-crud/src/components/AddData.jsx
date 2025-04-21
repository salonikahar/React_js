import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddData() {
  let [form, setForm] = useState({});
  let [errors, setErrors] = useState({});

  let getInput = (e) => {
    let { name, value, type, checked } = e.target;
    let inputValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: inputValue }));
  };

  let validate = () => {
    let errs = {};
    if (!form.name || form.name.length < 3) errs.name = 'Name must be at least 3 characters';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone || !/^\d+$/.test(form.phone)) errs.phone = 'Phone must be numeric';
    if (!form.image || !form.image.startsWith('http')) errs.image = 'Image must be a valid URL';
    return errs;
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      await axios.post('http://localhost:3000/users', form);
      toast.success('User added successfully!');
      setForm({});
    } catch (error) {
      toast.error('Failed to add user');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'phone', 'image'].map((v) => (
          <div className="mb-3" key={v}>
            <input
              type="text"
              name={v}
              className={`form-control ${errors[v] ? 'is-invalid' : ''}`}
              placeholder={v.toUpperCase()}
              value={form[v] || ''}
              onChange={getInput}
            />
            {errors[v] && <div className="invalid-feedback">{errors[v]}</div>}
          </div>
        ))}

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="status"
            checked={form.status || false}
            onChange={getInput}
          />
          <label className="form-check-label">Status</label>
        </div>

        <button className="btn btn-success">Add</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddData;
