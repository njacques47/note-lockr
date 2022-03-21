const express = require('express');
const fs = require('fs');
const path = require('path');
const nanoid = require('nanoid') //pass in a param to limit the characters to 7

// instantiate server
const PORT = process.env.PORT || 3001;
const app = express();


// middleware for incoming data & static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public'))); 


// GET index.html route
app.get('/', (req, res) => {
  res.sendFile('index.html')
});

// GET notes.html route
app.get('/notes', (req, res) => {
  //
});

// GET /api/notes route and return saved from db.json
app.get('/api/notes', (req, res) => {
  //
});

// POST new note
app.post('/', (req, res) => {
  //
});



// connects server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`)
})