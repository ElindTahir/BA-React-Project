import React, { useState } from 'react';
import mockData from './Json/mock_data.json';
import styles from './MockDataPage.module.scss';

function MockDataPage() {
  const [items, setItems] = useState([]);

  const loadData = () => {
    setItems(mockData);
  };

  return (
    <div className={styles.centerContainer}>
      <h1 className={styles.title}>Fetchen von Mock-Daten aus einer JSON-Datei</h1>
      <button className="btn btn-primary" onClick={loadData}>
        Mock-Daten laden
      </button>
      
      {items.length > 0 && (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Birth Place</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.vorname}</td>
                <td>{item.nachname}</td>
                <td>{item.email}</td>
                <td>{item.alter}</td>
                <td>{item.geburtsort}</td>
                <td>{item.taetigkeit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MockDataPage;
