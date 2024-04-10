
// const http  = require('http');
import http from 'node:http';import { readFileSync } from 'node:fs';

const indexPage11 = readFileSync('./index.html')
const stylesheets = readFileSync('./style.css')
const application = readFileSync('./browser-app.js')

const server = 
http.createServer((req, res)=>{

    const url = req.url;
    if(url === '/')
    {
       res.writeHead(200,
        {
         'content-type':'text/html'
        }); // res.writeHead(200,{'content-type' : 'text/plain'}) this is treated a text not HTML
       res.write(indexPage11)
       res.end();
    }
    else if (url === '/index.html') 
    {
        res.writeHead(200,
            {
             'content-type':'text/html'
            });
           res.write('<h1>Home Page</h1>')
           res.end(); 
    }
    else if (url === '/about.html') 
    {
        res.writeHead(200,
            {
             'content-type':'text/html'
            });
           res.write('<h1>About Page</h1>')
           res.end(); 
    }
    else if (url === '/styles.css') 
    {
        res.writeHead(200, 
            { 
                'content-type': 'text/css'
             })
        res.write(stylesheets)
        res.end()
      }
      else if (url === '/browser-app.js')
       {
        res.writeHead(200,
             { 
                'content-type': 'text/javascript'
             })
        res.write(application)
        res.end()
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