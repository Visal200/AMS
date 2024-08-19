import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext'; 
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import './MyAssets.css';

function MyAsset() {
  const [globalFilter, setGlobalFilter] = useState('');

  const assets = [
    { id: 1, image: 'img1.jpg', name: 'Asset 1', type: 'Type 1', subCategory: 'Sub 1', unitPrice: 100, dueDate: '2024-12-31' },
    { id: 2, image: 'img2.jpg', name: 'Asset 2', type: 'Type 2', subCategory: 'Sub 2', unitPrice: 200, dueDate: '2024-11-30' },
  ];

  const totalUnitPrice = assets.reduce((total, asset) => total + asset.unitPrice, 0);

  const header = (
    <div className="table-header">
      <span className="p-input-icon-left search-bar">
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
      <Button
        label="Download"
        icon="pi pi-download"
        className="p-button-rounded p-button-info download-button"
      />
    </div>
  );

  return (
    <div className="my-asset-card">
      <div className="card-content">
        <DataTable
          value={assets}
          paginator
          rows={10}
          header={header}
          globalFilter={globalFilter}
          responsiveLayout="scroll"
          className="p-datatable-gridlines"
        >
          <Column field="id" header="ID" />
          <Column
            field="image"
            header="Image"
            body={(data) => <img src={data.image} alt={data.name} className="product-image" />}
          />
          <Column field="name" header="Asset Name" />
          <Column field="type" header="Type" />
          <Column field="subCategory" header="Sub Category" />
          <Column field="unitPrice" header="Unit Price" />
          <Column field="dueDate" header="Due Date" />
        </DataTable>
        <div className="total-unit-price">Total Price: {totalUnitPrice}</div>
      </div>
    </div>
  );
}

export default MyAsset;
