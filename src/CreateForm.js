// src/CreateForm.js
import React, { useState } from 'react';

const CreateForm = ({ onCreate }) => {
  const [data, setData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onCreate(data);
    setData({ name: '', description: '' });
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default CreateForm;
