// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import EventPage from './components/pages/EventPage';
import RegisterPage from './components/pages/RegisterPage';
import CreateEvent from './components/pages/CreateEvent';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/register/:id" element={<RegisterPage />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
