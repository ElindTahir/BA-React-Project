import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss';

function LandingPage() {
  return (
    <div className={styles.centerContainer}>
      <Link to="/database">
        <button className={`btn ${styles.btnOne} m-4`}>
          DB Komponente
        </button>
      </Link>
      <Link to="/fetch-api">
        <button className={`btn ${styles.btnTwo} m-4`}>
          API Komponente
        </button>
      </Link>
      <Link to="/charts">
        <button className={`btn ${styles.btnThree} m-4`}>
          Chart Komponente
        </button>
      </Link>
      <Link to="/mock-data">
        <button className={`btn ${styles.btnFour} m-4`}>
          Mock-Data Komponente
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
