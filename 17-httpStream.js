var http = require('http'); var fs = require('fs')

const data = http.createServer( (req, res)=>{

    // const text = fs.readFileSync('./content/big.txt', 'utf8'); res.end(text);
    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8')
    
    //Event : 'open';  
    fileStream.on('open', () => {
      fileStream.pipe(res)//https://www.geeksforgeeks.org/what-is-piping-in-node-js/
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  });


 data.listen(5000);