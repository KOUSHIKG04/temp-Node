const http = require("http");

const server = http.createServer(
    (req, res) => {
     
  if (req.url === "/") 
  {
    res.end("Welcome to our Home page!!");
  } 
  else if (req.url === "/about") 
  {
    //Blocking code!!! - It blocks all user some time untill it compleate the execution of the loop
    for (let index1 = 0; index1 < 10000; index1++) {
        for (let index2 = 0; index2 < 10000; index2++) {
            console.log(`${index1} ${index2}`);
        }
    }
    res.end("Here is our short history!");
  } 
  else
  {
    res.end(`<h1>OOPs!</h1> <p> We can't find your page you are looking for!!</p> <a href="/">Back Home</a>`);
    }
});
server.listen(5000);