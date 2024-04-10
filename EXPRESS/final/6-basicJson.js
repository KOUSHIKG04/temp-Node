import express from 'express';import  people  from './data.js'; const app = express();

app.get('/', (req, res) => {
  res.json(people); // something wrong happening it getting whole txt data instead of only product dat in ESM
});

app.listen(5000, () => {
  console.log(`Server running on port: 5000`);
});  
