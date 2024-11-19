// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a route for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});