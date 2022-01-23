const express = require('express')
const app = express()
const port = 3000

//Routing
app.get('/', (req, res) => {
  res.send('Hello, welcome to Law of Attraction with Rupali!')
})

app.get('/home', (req, res) => {
    res.send('Hello, welcome to Law of Attraction with Rupali!')
  })

app.get('/podcasts', (req, res) => {
    res.send("Hello, welcome to Rupali's Podcasts on LOA!")
  })

app.get('/courses', (req, res) => {
    res.send("Hello, welcome to Rupali's Courses on LOA!")
  })
  
app.get('/books', (req, res) => {
    res.send("Hello, welcome to Rupali's recommended books for LOA!")
  })

  app.get('/challenges', (req, res) => {
    res.send("Hello, welcome to Rupali's Solutions to overcome Challenges!")
  })

  app.get('/shop', (req, res) => {
    res.send("Hello, welcome to Rupali's essentials to Manifest the Best!")
  })
  
  /* URI for future use
  app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })
  */

  app.get('*', (req, res) => {
    res.send("LOA could not find the page requested!")
  })
  
app.listen(port, () => {
  console.log(`Rupali's LOA listening on port ${port}`)
})


/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200; // 200 means OK rersponse
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Rupali');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/