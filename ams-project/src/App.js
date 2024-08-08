import React, { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleMenu = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app">
      <Header toggleMenu={toggleMenu} />
      <div className="main-content">
        <Sidebar isVisible={isSidebarVisible} />
        <div className={`content ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
        </div>
      </div>
    </div>
  );
}
export default App;