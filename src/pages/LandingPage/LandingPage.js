import React from 'react';
import { Link } from 'react-router-dom';
import DatabasePage from '../DatabasePage/DatabasePage';
import FetchApiPage from '../FetchApiPage/FetchApiPage';
import ChartPage from '../ChartPage/ChartPage';
import './LandingPage.scss'

function LandingPage() {
  return (
    <div className="center-container">
      <Link to="/database">
        <button className="btn btn-One m-4">
          DB Komponente
        </button>
      </Link>
      <Link to="/fetch-api">
        <button className="btn btn-Two m-4">
          API Komponente
        </button>
      </Link>
      <Link to="/charts">
        <button className="btn btn-Three m-4">
          Chart Komponente
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;