const express = require('express');
const fs = require('fs');
const path = require('path');
const nanoid = require('nanoid') //pass in a param to limit the characters to 7

// instantiate server
const PORT = process.env.PORT || 3001;
const app = express();


// GET index.html route
app.get('/', (req, res) => {
  //
});

// GET notes.html route
app.get('/', (req, res) => {
  //
});

// GET /api/notes route and return saved from db.json
app.get('/', (req, res) => {
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