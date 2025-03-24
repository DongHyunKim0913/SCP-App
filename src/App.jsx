import React, { useState } from 'react';
import './App.css'; 
import Nav from './Nav';
import Header from './Header';
import Card from './Card';
import scpData from './scpData.json';

const App = () => {
  const [selectedSCP, setSelectedSCP] = useState(scpData[0]); // Default to first SCP

  return (
    <div className="App">
      <Nav scpList={scpData} onSelectSCP={setSelectedSCP} />
      <Header />
      <main>
        <Card scp={selectedSCP} />
      </main>
    </div>
  );
};

export default App;

