import React, { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.contact} onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        className={css.inpute}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
      />
      <h3>Number</h3>
      <input
        className={css.inpute}
        type="tel"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
        placeholder="Phone number"
      />
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};
