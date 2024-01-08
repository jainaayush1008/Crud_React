// src/ReadTable.js
import React from 'react';

const ReadTable = ({ data, onDelete, onEdit, editingIndex }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index === editingIndex ? 'editing' : ''}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
                <button onClick={() => onEdit(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadTable;
