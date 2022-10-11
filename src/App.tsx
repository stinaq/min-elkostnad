import React from 'react';
import DisplayCost from './features/DisplayCost/display-cost';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayCost watt={700} possessivePronoun={'Min'} thing={'micro'} costPerKWh={865}></DisplayCost>
      </header>
    </div>
  );
}

export default App;
