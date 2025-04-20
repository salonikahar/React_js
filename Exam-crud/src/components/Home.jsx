import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    let [users, setUsers] = useState([]);
    let [search, setSearch] = useState('');
    let [recordsPerPage, setRecordsPerPage] = useState(5);
    let [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        axios.get('http://localhost:3000/users').then(res => setUsers(res.data));
    }, [setUsers]);

    let filtered = users.filter(user =>
        user.status &&
        (user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.includes(search))
    );

    let lastIndex = currentPage * recordsPerPage;
    let firstIndex = lastIndex - recordsPerPage;
    let currentData = filtered.slice(firstIndex, lastIndex);

    let handleDelete = async (id) => {
        await axios.put(`http://localhost:3000/users/${id}`, { status: false });
        let updated = await axios.get('http://localhost:3000/users');
        setUsers(updated.data);
    };

    const deleteReview = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/Review/${id}`);
            setReviews(reviews.filter(r => r.id !== id));
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };


    return (
        <div className="container mt-4">

            <div className="row mb-3">
                <div className="col-md-6 mb-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-2">
                    <select
                        className="form-select"
                        onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                    >
                        <option value="5">Show 5</option>
                        <option value="10">Show 10</option>
                        <option value="15">Show 15</option>
                    </select>
                </div>
            </div>

         
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th><th>Email</th><th>Phone</th><th>Image</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td>
                            <td><img src={user.image} alt="user" width="50" /></td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-center mb-5">
                {Array.from({ length: Math.ceil(filtered.length / recordsPerPage) }, (v, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm ${currentPage === i + 1 ? 'btn-dark' : 'btn-outline-dark'} mx-1`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

    
        </div>
    );
}

export default Home;
