import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import DatabasePage from './pages/DatabasePage/DatabasePage.tsx';
import FetchAPIPage from './pages/FetchApiPage/FetchApiPage.tsx';
import ChartPage from './pages/ChartPage/ChartPage.tsx';
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
