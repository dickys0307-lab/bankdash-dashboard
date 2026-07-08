import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
