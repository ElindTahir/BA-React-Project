const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bachelordatabase',
  password: 'root',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Der Server läuft und ist bereit, Anfragen zu empfangen!');
});

app.get('/api/items', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM bachelorDummyData');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/age-data', async (req, res) => {
  try {
    const query = `
        SELECT CASE
          WHEN alter BETWEEN 18 AND 23 THEN '18-23'
          WHEN alter BETWEEN 24 AND 28 THEN '24-28'
          WHEN alter BETWEEN 29 AND 38 THEN '29-38'
          WHEN alter BETWEEN 39 AND 47 THEN '39-47'
          WHEN alter BETWEEN 48 AND 60 THEN '48-60'
          ELSE 'Other'
        END AS age_group,
        COUNT(*) AS count
        FROM bachelordummydata
        GROUP BY age_group
        ORDER BY age_group;
      `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/items', async (req, res) => {
  try {
    await pool.query('DELETE FROM bachelordummydata');

    await pool.query('ALTER SEQUENCE bachelordummydata_id_seq RESTART WITH 1');

    res.status(200).send('Alle Daten wurden gelöscht und die ID-Sequenz wurde zurückgesetzt');
  } catch (error) {
    console.error('Fehler beim Löschen der Daten:', error);
    res.status(500).send('Fehler beim Löschen der Daten');
  }
});

app.post('/api/restore-csv', async (req, res) => {
  const filePath = path.join(__dirname, 'tableBackup', 'bachelordummydata.csv');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        await pool.query('DELETE FROM bachelordummydata');
        await pool.query('ALTER SEQUENCE bachelordummydata_id_seq RESTART WITH 1');

        for (const row of results) {
          await pool.query(
            'INSERT INTO bachelordummydata (vorname, nachname, email, alter, geburtsort, taetigkeit) VALUES ($1, $2, $3, $4, $5, $6)',
            [row.vorname, row.nachname, row.email, row.alter, row.geburtsort, row.taetigkeit]
          );
        }

        res.status(200).send('Daten wurden erfolgreich wiederhergestellt');
      } catch (error) {
        console.error('Fehler beim Wiederherstellen der Daten:', error);
        res.status(500).send('Fehler beim Wiederherstellen der Daten');
      }
    });
});

app.delete('/api/items/delete100', async (req, res) => {
  try {
    await pool.query('DELETE FROM bachelordummydata WHERE id IN (SELECT id FROM bachelordummydata LIMIT 100)');
    res.status(200).send('100 Datensätze wurden gelöscht');
  } catch (error) {
    console.error('Fehler beim Löschen der 100 Datensätze:', error);
    res.status(500).send('Fehler beim Löschen der 100 Datensätze');
  }
});

app.post('/api/items/add100', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'sql', 'insertData.sql');
    const insertDataSql = fs.readFileSync(filePath, 'utf8');

    await pool.query(insertDataSql);

    res.status(200).send('100 Datensätze wurden hinzugefügt');
  } catch (error) {
    console.error('Fehler beim Hinzufügen der 100 Datensätze:', error);
    res.status(500).send('Fehler beim Hinzufügen der 100 Datensätze');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
