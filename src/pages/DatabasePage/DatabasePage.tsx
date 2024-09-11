import React, { useState } from 'react';
import databaseService from '../../service/database-service/databaseService.tsx';
import styles from './DatabasePage.module.scss';

function DatabasePage() {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    console.log("Lade Daten...");
    try {
      const data = await databaseService.getItems();
      setItems(data);
      console.log("Daten wurden geladen:", data);
    } catch (error) {
      console.error("Fehler beim Laden der Daten:", error);
    }
  };

  const restoreData = async () => {
    console.log("Starte Datenwiederherstellung...");
    try {
      const response = await databaseService.restoreCSV();
      console.log("Daten wurden wiederhergestellt:", response);
      setTimeout(loadData, 1000);
    } catch (error) {
      console.error("Fehler beim Wiederherstellen der Daten:", error);
    }
  };

  const deleteAllData = async () => {
    console.log("Lösche alle Daten...");
    try {
      const response = await databaseService.deleteAllItems();
      console.log("Alle Daten wurden gelöscht:", response);
      setItems([]);
      setTimeout(loadData, 1000);
    } catch (error) {
      console.error("Fehler beim Löschen der Daten:", error);
    }
  };

  const deleteDataSet = async () => {
    console.log("Lösche 100 Datensätze...");
    try {
      const response = await databaseService.delete100Items();
      console.log("100 Datensätze wurden gelöscht:", response);
      setTimeout(loadData, 1000);
    } catch (error) {
      console.error("Fehler beim Löschen der 100 Datensätze:", error);
    }
  };

  const addDataSet = async () => {
    console.log("Füge 100 Datensätze hinzu...");
    try {
      const response = await databaseService.add100Items();
      console.log("100 Datensätze wurden hinzugefügt:", response);
      setTimeout(loadData, 1000);
    } catch (error) {
      console.error("Fehler beim Hinzufügen der 100 Datensätze:", error);
    }
  };

  return (
    <div className={styles.centerContainer}>
      <h1 className={styles.title}>Fetchen von Daten von einer Datenbank</h1>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={loadData}>Datensätze laden</button>
        <button className="btn btn-warning" onClick={addDataSet}>100 Datensätze hinzufügen</button>
        <button className="btn btn-warning" onClick={deleteDataSet}>100 Datensätze löschen</button>
        <button className="btn btn-danger" onClick={deleteAllData}>Alle Datensätze löschen</button>
        <button className="btn btn-success" onClick={restoreData}>Wiederherstellen der Datensätze</button>
      </div>
      {items.length > 0 && (
        <table className={`table table-striped table-hover ${styles.table}`}>
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Email</th>
              <th>Alter</th>
              <th>Geburtsort</th>
              <th>Tätigkeit</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
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

export default DatabasePage;
