import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DisplayCost from './features/DisplayCost/display-cost';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function Main() {
  return (
    <div>
      <DisplayCost watt={0.3} possessivePronoun={'Min'} thing={'glödlampa'} costPerKWh={2222}></DisplayCost>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h2>Oh no, something went wrong</h2>
    </div>
  );
}