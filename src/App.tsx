import React from 'react';
import DisplayCost from './features/DisplayCost/display-cost';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayCost watt={0.3} possessivePronoun={'Min'} thing={'glödlampa'} costPerKWh={2222}></DisplayCost>
      </header>
    </div>
  );
}

export default App;
