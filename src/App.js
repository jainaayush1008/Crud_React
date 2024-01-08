// src/App.js
import React, { useState } from 'react';
import CreateForm from './CreateForm';
import ReadTable from './ReadTable';
import UpdateForm from './UpdateForm';
import './App.css'; // Import the CSS file

function App() {
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleCreate = (newData) => {
    setDataList([...dataList, newData]);
  };

  const handleDelete = (index) => {
    const newDataList = [...dataList];
    newDataList.splice(index, 1);
    setDataList(newDataList);

    // Reset editing state if the item being edited is deleted
    if (index === editingIndex) {
      setEditingIndex(null);
      setSelectedData(null);
    }
  };

  const handleUpdate = (updatedData) => {
    const newDataList = [...dataList];
    const selectedIndex = newDataList.findIndex((item) => item === selectedData);
    newDataList[selectedIndex] = updatedData;
    setDataList(newDataList);
    setSelectedData(null);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setSelectedData(dataList[index]);
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setSelectedData(null);
    setEditingIndex(null);
  };

  return (
    <div>
      <CreateForm onCreate={handleCreate} />
      <ReadTable data={dataList} onDelete={handleDelete} onEdit={handleEdit} editingIndex={editingIndex} />
      {selectedData && (
        <UpdateForm onUpdate={handleUpdate} selectedData={selectedData} onCancel={handleCancelEdit} />
      )}
    </div>
  );
}

export default App;
