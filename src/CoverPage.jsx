// src/Components/CoverPage.jsx
import React from 'react';

const CoverPage = ({ onStartExploring }) => {
  return (
    <div className="cover-page">
      <h1>Welcome to the SCP Foundation</h1>
      <p>Discover the most mysterious and dangerous anomalies known to mankind.</p>
      <button onClick={onStartExploring}>Start Exploring</button>
    </div>
  );
};

export default CoverPage;
