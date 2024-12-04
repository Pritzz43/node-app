const express = require('express');
const app = express();

// Simulate a simple dataset with more information
const users = [
  { id: 1, name: 'John Doe', age: 35, job: 'Software Engineer', city: 'New York' },
  { id: 2, name: 'Alan', age: 60, job: 'Retired', city: 'London' },
  { id: 3, name: 'Saral', age: 42, job: 'Data Scientist', city: 'Toronto' },
  { id: 4, name: 'Pratham', age: 45, job: 'Teacher', city: 'Mumbai' },
  { id: 5, name: 'EG', age: 45, job: 'Designer', city: 'San Francisco' },
  { id: 6, name: 'Emily', age: 29, job: 'Marketing Manager', city: 'Berlin' },
  { id: 7, name: 'Chris', age: 38, job: 'Chef', city: 'Paris' },
  { id: 8, name: 'Anna', age: 27, job: 'Software Developer', city: 'Tokyo' },
  { id: 9, name: 'Jake', age: 34, job: 'Photographer', city: 'Sydney' },
  { id: 10, name: 'Sophia', age: 22, job: 'Student', city: 'Los Angeles' }
];

// Main endpoint returning all users
app.get('/', (req, res) => {
  res.json(users);
});

// Endpoint to get a specific user by ID
app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Endpoint to add a new user (this would be useful for POST requests)
app.post('/user', express.json(), (req, res) => {
  const { id, name, age, job, city } = req.body;
  
  if (!id || !name || !age || !job || !city) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newUser = { id, name, age, job, city };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint to update an existing user
app.put('/user/:id', express.json(), (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, age, job, city } = req.body;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update user details
  user.name = name || user.name;
  user.age = age || user.age;
  user.job = job || user.job;
  user.city = city || user.city;

  res.json(user);
});

// Endpoint to delete a user
app.delete('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: 'User deleted' });
});

// Starting the server
app.listen(5080, () => {
  console.log('Server is running on port 5080');
});
