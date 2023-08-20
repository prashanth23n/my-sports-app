// src/App.js
import React, { useState } from "react";
import sportsData from "./sportsData";
import Sidebar from "./components/Sidebar";
import MatchDisplay from "./components/MatchDisplay";
import "./App.css";

const App = () => {
  const sports = Object.keys(sportsData);
  const [selectedSport, setSelectedSport] = useState(sports[0]);

  return (
    <div className="app">
      <Sidebar
        sports={sports}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
      />
      <MatchDisplay matches={sportsData[selectedSport]} />
    </div>
  );
};

export default App;
