import React, { useState, useEffect } from "react";

function CourseForm({ course, onSave }) {
  const [formData, setFormData] = useState({ code: '', name: '', credits: '' });

  useEffect(() => {
    if (course) setFormData(course);
  }, [course]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.code || !formData.name || !formData.credits) return;
    onSave({ ...formData, credits: parseInt(formData.credits) });
    setFormData({ code: '', name: '', credits: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" placeholder="Code" value={formData.code} onChange={handleChange} />
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="credits" placeholder="Credits" value={formData.credits} onChange={handleChange} />
      <button type="submit">{course ? 'Update' : 'Add'} Course</button>
    </form>
  );
}

export default CourseForm;