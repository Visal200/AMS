import React, { useState } from 'react';
import './inbox.css'; // Assuming you want to add some custom styles

const Inbox = () => {
    // Initial data structure for the table rows
    const initialData = [
        {
            id: 1,
            image: '', // You can add default or placeholder images
            assetName: 'Asset 1',
            assetType: 'Type A',
            subCategory: 'Sub A',
            userName: 'User 1',
            dueDate: '2024-08-12',
            availability: 'Available',
            status: 'Pending'
        },
        {
            id: 2,
            image: '', // You can add default or placeholder images
            assetName: 'Asset 2',
            assetType: 'Type B',
            subCategory: 'Sub B',
            userName: 'User 2',
            dueDate: '2024-09-15',
            availability: 'Unavailable',
            status: 'Pending'
        },
        {
            id: 3,
            image: '', // You can add default or placeholder images
            assetName: 'Asset 3',
            assetType: 'Type C',
            subCategory: 'Sub C',
            userName: 'User 3',
            dueDate: '2024-09-11',
            availability: 'Unavailable',
            status: 'Pending'
        },
    ];

    // State for table data
    const [tableData, setTableData] = useState(initialData);
    const [reason, setReason] = useState('');

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleAddClick = () => {
        console.log("Reason added:", reason);
        // Add your logic here for handling the reason added
        setReason(''); // Clear the input after adding
    };

    // Function to handle the approval or denial of an asset
    const handleStatusChange = (id, newStatus) => {
        const updatedData = tableData.map(item =>
            item.id === id ? { ...item, status: newStatus } : item
        );
        setTableData(updatedData);
    };

    // Function to handle the change in availability
    const handleAvailabilityChange = (id, newAvailability) => {
        const updatedData = tableData.map(item =>
            item.id === id ? { ...item, availability: newAvailability } : item
        );
        setTableData(updatedData);
    };

    return (
        <div>
            <table className="inbox-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Asset Name</th>
                        <th>Asset Type</th>
                        <th>Sub Category</th>
                        <th>User Name</th>
                        <th>Due Date</th>
                        <th>Availability</th>
                        <th>Asset Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.image} alt={`Asset ${item.id}`} />
                            </td>
                            <td>{item.assetName}</td>
                            <td>{item.assetType}</td>
                            <td>{item.subCategory}</td>
                            <td>{item.userName}</td>
                            <td>{item.dueDate}</td>
                            <td>
                                <select
                                    value={item.availability}
                                    onChange={(e) => handleAvailabilityChange(item.id, e.target.value)}
                                    className="availability-select"
                                >
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                    <option value="In Use">In Use</option>
                                    <option value="Reserved">Reserved</option>
                                </select>
                            </td>
                            <td>
                                <button 
                                    className="status-button approved" 
                                    onClick={() => handleStatusChange(item.id, 'Approved')}
                                >
                                    Approved
                                </button>
                                <button 
                                    className="status-button denied" 
                                    onClick={() => handleStatusChange(item.id, 'Denied')}
                                >
                                    Denied
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="reason-container">
                <input 
                    type="text" 
                    placeholder="Reason" 
                    value={reason} 
                    onChange={handleReasonChange} 
                    className="reason-input"
                />
                <button onClick={handleAddClick} className="add-button">Add Reason</button>
            </div>
        </div>
    );
};

export default Inbox;
