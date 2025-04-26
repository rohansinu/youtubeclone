import React from 'react';
import { FaHome, FaFire, FaYoutube, FaHistory, FaPlayCircle } from 'react-icons/fa';
import './SideBar.css'; // We'll add some custom styles too!

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column p-3 bg-light" style={{ width: '241px', height: '100vh', position: 'fixed', left: 0 ,margin:0}}>
      
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <FaHome className="me-2" />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <FaFire className="me-2" />
            Shorts
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <FaPlayCircle className="me-2" />
            Subscriptions
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <FaHistory className="me-2" />
            History
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
