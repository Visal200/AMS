import React, { useState } from 'react';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar({ isVisible }) {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    { name: 'My Assets', icon: 'fas fa-briefcase' },
    { name: 'Search Asset', icon: 'fas fa-search' },
    { name: 'Inbox', icon: 'fas fa-inbox' },
    { name: 'Assets', icon: 'fas fa-box' },
    { name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { name: 'Settings', icon: 'fas fa-cog' },
    { name: 'Sign out', icon: 'fas fa-sign-out-alt' }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
          onClick={() => handleItemClick(item.name)}
        >
          <i className={item.icon}></i>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
