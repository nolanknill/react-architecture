import contestants from "./data/contestants.json";
import ContestantDetails from "./components/ContestantDetails/ContestantDetails";
import ContestantsList from "./components/ContestantsList/ContestantsList";
import { useState } from "react";
import "./App.scss";

function App() {
  const [activeContestant, setActiveContestant] = useState(contestants[0]);

  function updateActiveContestant ( clickedId ) {
    const newActiveContestant = contestants.find((contestant) => contestant.id === clickedId)
    
    setActiveContestant(newActiveContestant);
  }

  return (
    <main className="app">
      <ContestantsList 
        contestants={contestants} 
        activeContestant={activeContestant} 
        updateActiveContestant={updateActiveContestant}
      />
      <ContestantDetails 
        contestant={activeContestant}
      />
    </main>
  );
}

export default App;
