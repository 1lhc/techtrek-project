const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from TechTrek API!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
