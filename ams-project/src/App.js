import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import MyAsset from './Components/MyAsset/MyAssets.jsx';
import SearchAsset from './Components/SearchAsset/SearchAsset.jsx';
import Inbox from './Components/Inbox/Inbox.jsx';
import Assets from './Components/Assets/Assets.jsx';
import Settings from './Components/Settings/Settings.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Login from './Components/Login/Login.jsx';
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const toggleMenu = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleLogin = (status) => {
    setAuthenticated(status);
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Header toggleMenu={toggleMenu} />}
        <div className="main-content">
          {isAuthenticated && <Sidebar isVisible={isSidebarVisible} />}
          <div className={`content ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/" element={isAuthenticated ? <Navigate to="/my-asset" /> : <Navigate to="/login" />} />
              <Route
                path="/dashboard"
                element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/my-asset"
                element={isAuthenticated ? <MyAsset /> : <Navigate to="/login" />}
              />
              <Route
                path="/inbox"
                element={isAuthenticated ? <Inbox /> : <Navigate to="/login" />}
              />
              <Route
                path="/settings"
                element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
              />
              <Route
                path="/assets"
                element={isAuthenticated ? <Assets /> : <Navigate to="/login" />}
              />
              {/* Add the SearchAsset route here */}
              <Route
                path="/search-asset"
                element={isAuthenticated ? <SearchAsset /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
