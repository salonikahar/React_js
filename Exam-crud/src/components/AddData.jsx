import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddData() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const getInput = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: inputValue }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name || form.name.length < 3) errs.name = 'Name must be at least 3 characters';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone || !/^\d+$/.test(form.phone)) errs.phone = 'Phone must be numeric';
    if (!form.image || !form.image.startsWith('http')) errs.image = 'Image must be a valid URL';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
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
        {['name', 'email', 'phone', 'image'].map((field) => (
          <div className="mb-3" key={field}>
            <input
              type="text"
              name={field}
              className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
              placeholder={field.toUpperCase()}
              value={form[field] || ''}
              onChange={getInput}
            />
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
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
