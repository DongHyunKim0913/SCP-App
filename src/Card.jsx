import React from 'react';
import './App.css';

const Card = ({ scp }) => {
  return (
    <div className="scp-container">
      <div className="scp-card">
        <h2>{scp.subject} ({scp.class})</h2>
        <img src={scp.image} alt={scp.subject} className="scp-image" />
        <p><strong>Description:</strong> {scp.description}</p>
        <p><strong>Containment Procedures:</strong> {scp.containment_procedures}</p>
      </div>
    </div>
  );
};

export default Card;
