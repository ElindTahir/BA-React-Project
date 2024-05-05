import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import DatabasePage from './pages/DatabasePage/DatabasePage';
import FetchAPIPage from './pages/FetchApiPage/FetchApiPage';
import ChartPage from './pages/ChartPage/ChartPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/database" element={<DatabasePage />} />
          <Route path="/fetch-api" element={<FetchAPIPage />} />
          <Route path="/charts" element={<ChartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
