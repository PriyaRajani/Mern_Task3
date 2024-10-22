import React, { useState, useEffect } from 'react';
import './index.css'; 

const DynamicForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : [{ name: "", rollNo: "", marks: "" }];
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const InputChange = (index, event) => {
    const newFormData = [...formData];
    newFormData[index][event.target.name] = event.target.value;
    setFormData(newFormData);
  };

  const AddData = () => {
    setFormData([...formData, { name: "", rollNo: "", marks: "" }]);
  };

  const RemoveData = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  return (
    <div className="container">
      <h2>Student Form</h2>
      {formData.map((input, index) => (
        <div key={index} className="form-col">
          <label>
            Enter Your Name: &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
              onChange={(event) => InputChange(index, event)}
            />
         </label>
          <label>
            Enter Your  RollNo:&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="rollNo"
              placeholder="Roll Number"
              value={input.rollNo}
              onChange={(event) => InputChange(index, event)}
            />
          </label>
          <label>
            Enter Your Marks:&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="marks"
              placeholder="Marks"
              value={input.marks}
              onChange={(event) => InputChange(index, event)}
            />
          </label>
          <button type="button" onClick={() => RemoveData(index)}>
            Remove
          </button>
        </div>
      ))}
      <h3>Student Table:</h3>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((input, index) => (
            <tr key={index}>
              <td>{input.name}</td>
              <td>{input.rollNo}</td>
              <td>{input.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button type="button" onClick={AddData}>
        Click To Add Data In The Table
      </button>
    </div>
  );
};

export default DynamicForm;
