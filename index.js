const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', age: 35 },
    { id: 2, name: 'Alan ', age: 60},
    { id: 4, name: 'Sara', age: 42 },
    { id: 4, name: 'Saral', age: 42 },
    { id: 4, name: 'Pratham', age: 45 },
  ]);
});

app.listen(5000, () => {
  console.log('Server is running on port 5050');
  console.log('Server is running on port 5000');
})
