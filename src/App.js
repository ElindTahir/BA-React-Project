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
          <Route path="/" exact component={LandingPage} />
          <Route path="/database" component={DatabasePage} />
          <Route path="/fetch-api" component={FetchAPIPage} />
          <Route path="/charts" component={ChartPage} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
