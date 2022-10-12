import React from "react";

import './App.css';
import Main from './routes/main';
import About from './routes/about';
import Error from './routes/error';
import Layout from './routes/layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<Error />} />
      </Route>
    </Routes>

  );
}

export default App;
