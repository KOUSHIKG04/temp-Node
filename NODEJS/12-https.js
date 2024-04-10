const http = require("http");

const server = http.createServer(
    (req, res) => {

        
  if (req.url === "/") 
  {
    res.end("Welcome to our Home page!!");
  } 
  else if (req.url === "/about") 
  {
    res.end("Here is our short history!");
  } 
  else
  {
    res.end(`<h1>OOPs!</h1> <p> We can't find your page you are looking for!!</p> <a href="/">Back Home</a>`);
    }
});
server.listen(5000);