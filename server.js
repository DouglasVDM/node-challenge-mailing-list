const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
const data = require('./data');

app.get('/', (req, res) => {
  res.json(`route /lists to fetch all list names`)
});

app.get('/lists', (req, res) => {
  res.json(data.map(el => el.name));
});

app.get('/lists/:name', (req, res) => {
  const { name } = req.params;
  const nameFound = data.some(el => el.name === name);
  if (nameFound) {
    const filteredName = data.filter(el => el.name === name);
    res.json(filteredName);
  } else {
    res.status(404).json({msg: `No list with the name of ${name}`});
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server started on port:${PORT}`);
});