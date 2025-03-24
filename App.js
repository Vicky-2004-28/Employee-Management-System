import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const addEmployee = () => {
    axios.post("http://localhost:8080/api/employees", { fname, lname, email, department }).then(() => {
      setEmployees([...employees, { fname, lname, email, department }]);
    });
    if(addEmployee){
      alert("added")
  
    }
  };

  return (
    <div>
            <h1>Employee Management System</h1>

    <div className="container">
      <div className="input-container">
        <div className="input-group">
          <label>First Name :</label>
          <input type="text" placeholder="Enter your first name" onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Last Name :</label>
          <input type="text" placeholder="Enter your last name" onChange={(e) => setLname(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email :</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Department :</label>
          <input type="text" placeholder="Enter department" onChange={(e) => setDepartment(e.target.value)} />
        </div>
      
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      {/* <h2>Employee List</h2>
      <ul className="employee-list">
        {employees.map((emp, index) => (
          <li key={index} className="employee-item">
            {emp.fname} {emp.lname} - {emp.email} - {emp.department}
          </li>
        ))}
      </ul> */}
    </div>
    </div>
  );
}

export default App;
