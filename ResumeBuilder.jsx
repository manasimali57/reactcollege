import React, { useState } from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    summary: '',
    education: '',
    skills: '',
    careerObjective: '',
    experience: '',
    achievements: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Resume Submitted!");
  };

  return (
    <div className="resume-container">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Professional Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="4"
            placeholder="Write a brief professional summary"
          />
        </div>

        <div className="form-field">
          <label>Education Qualifications:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="e.g., Bachelor's in Computer Science"
          />
        </div>

        <div className="form-field">
          <label>Academic and Non-Academic Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., JavaScript, Team Management"
          />
        </div>

        <div className="form-field">
          <label>Career Objective:</label>
          <textarea
            name="careerObjective"
            value={formData.careerObjective}
            onChange={handleChange}
            rows="3"
            placeholder="What is your career goal?"
          />
        </div>

        <div className="form-field">
          <label>Experience and Internships:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows="4"
            placeholder="Mention your work experience or internships"
          />
        </div>

        <div className="form-field">
          <label>Skills and Achievements:</label>
          <textarea
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            rows="3"
            placeholder="Mention your skills and key achievements"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
