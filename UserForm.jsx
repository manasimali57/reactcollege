// src/UserForm.js
import React, { useState } from 'react';
import './UserForm.css'; // Importing the CSS file

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    // Simple regex for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = {};

    // Check for empty fields
    if (!formData.name) currentErrors.name = 'Name is required';
    if (!formData.email) currentErrors.email = 'Email is required';
    if (!formData.age) currentErrors.age = 'Age is required';

    // Validate email format
    if (formData.email && !validateEmail(formData.email)) {
      currentErrors.email = 'Invalid email format';
    }

    // Set errors or submit
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      setSuccessMessage(''); // clear success message if errors
    } else {
      setErrors({});
      setSuccessMessage('Form submitted successfully!');
    }
  };

  return (
    <div className="form-container">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? 'error' : ''}
          />
          {errors.age && <span className="error-msg">{errors.age}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {successMessage && <div className="success-msg">{successMessage}</div>}
    </div>
  );
};

export default UserForm;
