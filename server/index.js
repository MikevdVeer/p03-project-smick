import express from 'express';
import * as fs from "fs";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; 

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/league-of-legends-champions', (req, res) => {
  fs.readFile('data/champs.json', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/league-of-legends-skins', (req, res) => {
  fs.readFile('data/skins.json', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/smite-gods', (req, res) => {
  fs.readFile('data/gods_1.json', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/smite-relic', (req, res) => {
  fs.readFile('data/relic.json', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/smite-maps', (req, res) => {
  fs.readFile('data/maps.json', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/overwatch-heros', (req, res) => {
  fs.readFile('data/heros.json', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.send(data);
  });
});

app.get('/form-succes', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h1>Pagina uit de server</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});