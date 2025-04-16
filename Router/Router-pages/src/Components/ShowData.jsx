import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../show.css";

function ShowData() {
  const [stuData, setStuData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getStudentData = JSON.parse(localStorage.getItem("student")) || [];
    setStuData(getStudentData);
  }, [setStuData]);

  const deleteData = (index) => {
    const updatedData = stuData.filter((_, i) => i !== index);
    setStuData(updatedData);
    localStorage.setItem("student", JSON.stringify(updatedData));
  };

  const sortingByName = (e) => {
    const order = e.target.value;
    const sortedData = [...stuData].sort((a, b) =>
      order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setStuData(sortedData);
  };

  return (
    <div className="table-container">
      {/* Search & Sorting Controls */}
      <div className="table-controls">
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search by Name"
        />
         
      </div>

      {/* Display Table */}
      {stuData.length > 0 ? (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stuData
              .filter((v) =>
                search
                  ? v.name?.toLowerCase().includes(search) || v.email?.toLowerCase().includes(search)
                  : true
              )
              .map((v, i) => (
                <tr key={i}>
                  <td>{v.name || "Empty"}</td>
                  <td>{v.email || "Empty"}</td>
                  <td>{v.password || "Empty"}</td>
                  <td>{v.gender || "Not Selected"}</td>
                  <td>{v.hobby?.join(", ") || "Not Selected"}</td>
                  <td>{v.city || "Not Selected"}</td>
                  <td style={{display:"flex" , justifyContent : "center", alignItems:"center"}}>
                    <button className="delete-btn" onClick={() => deleteData(i)}>
                      Delete
                    </button>
                    <button className="update-btn">
                    <Link to={`/update/${i}`} className="update-link">
                      Update
                    </Link>
                    </button>    
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h3 style={{ color: "red" }}>No Data Available</h3>
      )}
    </div>
  );
}

export default ShowData;
