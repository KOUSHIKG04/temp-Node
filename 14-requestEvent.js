const http = require('http');

// const server = http.createServer((req, res) => {res.end('Welcome')})

// Using Event Emitter API
const app = http.createServer()


//emits (request event) - subcribe to it / listen for it / respond to it
app.on('request', (req, res) => {
  res.end('Welcome')
})

app.listen(5000);