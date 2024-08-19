import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar({ isVisible }) {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'My Assets', path: '/my-asset', icon: 'fas fa-briefcase' },
    { name: 'Search Asset', path: '/search-asset', icon: 'fas fa-search' },
    { name: 'Inbox', path: '/inbox', icon: 'fas fa-inbox' },
    { name: 'Assets', path: '/assets', icon: 'fas fa-box' },
    { name: 'Dashboard', path: '/dashboard', icon: 'fas fa-tachometer-alt' },
    { name: 'Settings', path: '/settings', icon: 'fas fa-cog' },
    { name: 'Sign out', path: '/sign-out', icon: 'fas fa-sign-out-alt' }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path); // Redirect to the selected path
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <i className={item.icon}></i>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
