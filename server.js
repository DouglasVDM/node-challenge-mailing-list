const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
let data = require('./data');

app.get('/', (req, res) => {
  res.json(`route /lists to fetch all list names`)
});

// Get All Lists
app.get('/lists', (req, res) => {
  res.json(data.map(el => el.name));
});

// Get List by Name
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

// Delete List by Name
app.delete('/lists/:name', (req, res) => {
  const { name } = req.params;
  const nameFound = data.some(el => el.name === name);

  if (nameFound) {
    const deletedNames = data.filter(el => el.name !== name);
    data = deletedNames;
    res.json({ msg: `List with name of ${name} deleted!` });
  } else {
    res.status(404).json({msg: `List with the name of ${name} not found!`});
  }
});


app.put('/lists/:name', function (req, res) {
  const { name } = req.params;
   //Check if all fields are provided and are valid:
  if (!req.body.name) {
      res.status(400);
      res.json({message: "Bad Request"});
   } else {
      //Gets the Index of List with given Name.
     const updateName = data.map(el=>el.id).indexOf(name);      
      if(updateName === -1){
         //List not found, create new
         data.push({
            name: name,
         });
         res.json({
            message: `New list created.`, location: "/lists/" + `${name}`});
      } else {
         //Update existing List
         data[updateName] = {
            name: name
         };
         res.json({message: `List with name ${name} updated.`,
            location: `/lists/ ${name}`});
      }
   }
});

app.listen(PORT, (req, res) => {
  console.log(`Server started on port:${PORT}`);
});