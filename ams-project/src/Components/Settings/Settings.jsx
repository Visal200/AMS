import React, { useState } from 'react';
import './Settings.css';

function Settings() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // State for managing the list of users
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: 'Ganesh',
            lastName: 'Ram',
            email: 'ganesh@example.com',
            phoneNumber: '9025674016',
            createdDate: '2024-01-11',
            role: 'Admin'
        },
        {
            id: 2,
            firstName: 'Mithun',
            lastName: 'Kailash',
            email: 'mithun@example.com',
            phoneNumber: '9025675014',
            createdDate: '2024-01-12',
            role: 'Store Manager'
        }
    ]);

    // State for search term
    const [searchTerm, setSearchTerm] = useState('');

    // Function to toggle the popup
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    // Function to handle the editing of a user (for future implementation)
    const handleEditClick = () => {
        alert('Edit button clicked');
    };

    // Function to handle the deletion of a user
    const handleDeleteClick = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    // Function to handle saving a new user from the popup form
    const handleSaveUser = (newUser) => {
        setUsers([...users, { id: users.length + 1, ...newUser }]);
        setIsPopupOpen(false); // Close the popup after saving the user
    };

    // Function to handle search input
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtered users based on the search term across all fields
    const filteredUsers = users.filter(user => 
        Object.values(user).some(value => 
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <main>
            <div className="card">
                <div className="user-list-header">
                    <h2>User Lists</h2>
                    <button className="add-user" onClick={togglePopup}>
                        <span className="icon"><i className="fas fa-plus"></i>Add</span>
                    </button>
                </div>
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Created Date</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.createdDate}</td>
                                <td>
                                    <select defaultValue={user.role}>
                                        <option>Admin</option>
                                        <option>Store Manager</option>
                                        <option>User</option>
                                    </select>
                                </td>
                                <td>
                                    <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDeleteClick(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Add New User</h2>
                        <form>
                            <div className="formGroup">
                                <label className="label">First Name:</label>
                                <input
                                    type="text"
                                    className="input"
                                />
                                <label className="label">Email:</label>
                                <input
                                    type="email"
                                    className="input"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="label">Last Name:</label>
                                <input
                                    type="text"
                                    className="input"
                                />
                                <label className="label">Password:</label>
                                <input
                                    type="password"
                                    className="input"
                                />
                            </div>
                            <div className="formGroup">
                                <label className="label">Phone Number:</label>
                                <input
                                    type="text"
                                    className="input"
                                />
                                <label className="label">Confirm Password:</label>
                                <input
                                    type="password"
                                    className="input"
                                />
                            </div>
                            <div className="buttonGroup">
                                <button type="button" className="saveButton" onClick={() => handleSaveUser({
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phoneNumber: '',
                                    createdDate: new Date().toISOString().split('T')[0], // current date
                                    role: 'User'
                                })}>
                                    Save
                                </button>
                                <button type="button" className="closeButton" onClick={togglePopup}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Settings;
