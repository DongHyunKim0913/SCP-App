// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Card from './Card';
import CoverPage from './CoverPage'; // Import CoverPage component
import scpData from './scpData.json';


const App = () => {
  const [selectedSCP, setSelectedSCP] = useState(scpData[0]); // Default to first SCP
  const [isExploring, setIsExploring] = useState(false); // State to toggle between cover page and SCP content

  const handleStartExploring = () => {
    setIsExploring(true); // Show SCP content
  };

  const handleGoToHomePage = () => {
    setIsExploring(false); // Show CoverPage again
  };

  return (
    <div className="App">
      {isExploring ? (
        <>
          <Nav scpList={scpData} onSelectSCP={setSelectedSCP} onGoToHomePage={handleGoToHomePage} />
          <Header />
          <main>
            <Card scp={selectedSCP} />
          </main>
        </>
      ) : (
        <CoverPage onStartExploring={handleStartExploring} />
      )}
    </div>
  );
};

export default App;
