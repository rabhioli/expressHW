
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});
// Define a route for '/greeting'
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger");
});


app.get("/greeting/:name?", (req, res) => {
  const name = req.params.name || 'rabhi';
  const greeting = `Wow hello there ${name}`
  res.send(greeting)
})

// Tip calculator route
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);
  const tipAmount = total * (tipPercentage / 100);
  res.send(`Your tip amount is: $${tipAmount.toFixed(2)}`);
});
