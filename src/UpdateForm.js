// src/UpdateForm.js
import React, { useState } from 'react';

const UpdateForm = ({ onUpdate, selectedData, onCancel }) => {
  const [updatedData, setUpdatedData] = useState(selectedData);

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(updatedData);
    onCancel();
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Name" value={updatedData.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={updatedData.description} onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdateForm;
