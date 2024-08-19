import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import './Assets.css';

function Assets() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [assets, setAssets] = useState([
    { id: 1, image: 'img1.jpg', name: 'Asset 1', type: 'Type 1', subCategory: 'Sub 1', userName: 'User 1', unitPrice: 100, dueDate: '2024-12-31', assignedDate: '2024-01-15', dateOfPurchase: '2023-12-01', description: 'First asset description' },
    { id: 2, image: 'img2.jpg', name: 'Asset 2', type: 'Type 2', subCategory: 'Sub 2', userName: 'User 2', unitPrice: 200, dueDate: '2024-11-30', assignedDate: '2024-02-20', dateOfPurchase: '2023-11-10', description: 'Second asset description' },
  ]);
  const [totalUnitPrice, setTotalUnitPrice] = useState(assets.reduce((total, asset) => total + asset.unitPrice, 0));
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [newAsset, setNewAsset] = useState({
    id: '',
    image: null,
    name: '',
    type: '',
    subCategory: '',
    userName: '',
    unitPrice: '',
    dueDate: '',
    assignedDate: '',
    dateOfPurchase: '',
    description: ''
  });

  const handleAddAsset = () => {
    setIsDialogVisible(true);
  };

  const handleSaveAsset = () => {
    setAssets([...assets, newAsset]);
    setTotalUnitPrice(totalUnitPrice + parseFloat(newAsset.unitPrice));
    setIsDialogVisible(false);
    setNewAsset({
      id: '',
      image: null,
      name: '',
      type: '',
      subCategory: '',
      userName: '',
      unitPrice: '',
      dueDate: '',
      assignedDate: '',
      dateOfPurchase: '',
      description: ''
    });
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setNewAsset({ ...newAsset, [name]: value });
  };

  const onImageChange = (e) => {
    setNewAsset({ ...newAsset, image: URL.createObjectURL(e.target.files[0]) });
  };

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
        label="Add"
        icon="pi pi-plus custom-icon"
        className="p-button-rounded p-button-success add-button"
        onClick={handleAddAsset}
      />
    </div>
  );

  return (
    <div className="assets-page">
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
            <Column field="type" header="Asset Type" />
            <Column field="subCategory" header="Sub Category" />
            <Column field="userName" header="User Name" />
            <Column field="unitPrice" header="Unit Price" />
            <Column field="dueDate" header="Due Date" />
            <Column field="assignedDate" header="Assigned Date" />
            <Column field="dateOfPurchase" header="Date of Purchase" />
            <Column field="description" header="Description" />
          </DataTable>
        </div>
        <div className="total-unit-price">Total Price: {totalUnitPrice}</div>
      </div>

      {isDialogVisible && (
        <div className="new-asset-dialog">
          <div className="new-asset-form">
            <div className="p-field">
              <label htmlFor="id">ID</label>
              <InputText id="id" name="id" value={newAsset.id} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" name="image" accept="image/*" onChange={onImageChange} />
            </div>
            <div className="p-field">
              <label htmlFor="name">Asset Name</label>
              <InputText id="name" name="name" value={newAsset.name} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="type">Type</label>
              <InputText id="type" name="type" value={newAsset.type} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="subCategory">Sub Category</label>
              <InputText id="subCategory" name="subCategory" value={newAsset.subCategory} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="userName">User Name</label>
              <InputText id="userName" name="userName" value={newAsset.userName} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="unitPrice">Unit Price</label>
              <InputText id="unitPrice" name="unitPrice" value={newAsset.unitPrice} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="dueDate">Due Date</label>
              <InputText type="date" id="dueDate" name="dueDate" value={newAsset.dueDate} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="assignedDate">Assigned Date</label>
              <InputText type="date" id="assignedDate" name="assignedDate" value={newAsset.assignedDate} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="dateOfPurchase">Date of Purchase</label>
              <InputText type="date" id="dateOfPurchase" name="dateOfPurchase" value={newAsset.dateOfPurchase} onChange={onInputChange} />
            </div>
            <div className="p-field">
              <label htmlFor="description">Description</label>
              <InputText id="description" name="description" value={newAsset.description} onChange={onInputChange} />
            </div>
            <div className="form-buttons">
              <Button label="Save" icon="pi pi-check" className="p-button-rounded p-button-success saveButton" onClick={handleSaveAsset} />
              <Button label="Close" icon="pi pi-times" className="p-button-rounded p-button-danger closeButton" onClick={handleCloseDialog} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assets;
