// src/Components/Nav.jsx
import React from 'react';

const Nav = ({ scpList, onSelectSCP, onGoToHomePage }) => {
  return (
    <nav className="nav-container">
      <h1 className="nav-title" onClick={onGoToHomePage}>SCP Foundation</h1> {/* Add onClick here */}
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
