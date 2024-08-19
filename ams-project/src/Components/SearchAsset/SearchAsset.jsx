import React from 'react';
import './SearchAsset.css';

function TableSection() {
  const tableData = [
    {
      id: 1,
      assetName: 'Computer',
      type: 'Type 1',
      subCategory: 'Sub 1',
      assignEmployee: 'Employee 1',
      dueDate: '01/01/2024',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      assetName: 'Keyboard',
      type: 'Type 2',
      subCategory: 'Sub 2',
      assignEmployee: 'Employee 2',
      dueDate: '01/02/2024',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      assetName: 'Monitor',
      type: 'Type 3',
      subCategory: 'Sub 3',
      assignEmployee: 'Employee 3',
      dueDate: '01/03/2024',
      image: 'https://via.placeholder.com/50',
    },
  ];

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/50?text=No+Image'; // Fallback image
  };

  return (
    <section className="card">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Asset Name</th>
              <th>Type</th>
              <th>Sub Category</th>
              <th>Assign Employee</th>
              <th>Due Date</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <img
                    src={row.image}
                    alt={row.assetName}
                    width="50"
                    onError={handleImageError}
                    className="asset-image"
                  />
                </td>
                <td>{row.assetName}</td>
                <td>{row.type}</td>
                <td>{row.subCategory}</td>
                <td>{row.assignEmployee}</td>
                <td>{row.dueDate}</td>
                <td>
                  <button
                    className="request-button"
                    aria-label={`Request for ${row.assetName}`}
                  >
                    Request
                  </button>
                </td>
                <td>
                  <textarea
                    placeholder="Enter remarks here"
                    rows="3"
                    cols="20"
                    className="remarks-textarea"
                    aria-label={`Remarks for ${row.assetName}`}
                  ></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TableSection;
