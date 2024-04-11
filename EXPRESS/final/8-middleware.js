import express from 'express';import logger from './logger.js';

const app = express();app.use(logger);

app.get('/',(req, res) =>
 {
  res.send('Home');
});

app.get('/about', (req, res)=>
{
    res.send('About')
})

app.listen(5000, () => {
  console.log(`Server running on port: 5000`);
});  


//can use this, but most efficient way is above mentioned 
// app.get('/', logger,(req, res) =>
//  {
//   res.send('Home');
// });

// app.get('/about',logger, (req, res)=>
// {
//     res.send('About')
// })





 

