import React, { useState } from 'react';

const CreateForm = ({ onCreate }) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onCreate(data);
    setData({});
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default CreateForm;
