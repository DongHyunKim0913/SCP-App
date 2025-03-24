import React from 'react';
import './App.css';

const Nav = ({ scpList, onSelectSCP }) => {
  return (
    <nav className="nav-container">
      <h1 className="nav-title">SCP Foundation</h1>
      <ul className="nav-links">
        {scpList.map((scp, index) => (
          <li key={index}>
            <button 
              className="nav-button" 
              onClick={() => onSelectSCP(scp)}
            >
              {scp.subject}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
