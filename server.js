
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

app.get('/magic', (req, res) => {
  res.send (`<h1>Magic Eight Ball</h1>`)
})

app.get('/magic/:question', (req, res) => {

  const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", 
  "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

  randPos = Math.floor(Math.random() * responses.length)
  const question = req.params.question;
  const answer =  responses[randPos];

  res.send (` <h1>${question}?<h1>
  <h2>Magic Eight Ball says: ${answer}</h2>`)
})