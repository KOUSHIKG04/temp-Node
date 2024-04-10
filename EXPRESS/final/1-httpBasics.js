
import http from 'node:http';// const http  = require('http');

const server = 
http.createServer((req, res)=>{

    const url = req.url;
    if(url === '/')
    {
       res.writeHead(200,
        {
         'content-type':'text/html'
        }); // res.writeHead(200,{'content-type' : 'text/plain'}) this is treated a text not HTML
       res.write('<h1>Home Page</h1>')
       res.end();
    }
    else if (url === '/about') 
    {
        res.writeHead(200,
            {
             'content-type':'text/html'
            });
           res.write('<h1>About Page</h1>')
           res.end(); 
    }
    else
    {
        res.writeHead(404,
            {
             'content-type':'text/html'
            });
           res.write(`<h1>OOPs!</h1> <p> We can't find page you are looking for!!</p> <a href="/">Back Home</a>`)
           res.end(); 
    }
})

server.listen(5000,()=>{
    console.log(`server running in port 5000`)
})