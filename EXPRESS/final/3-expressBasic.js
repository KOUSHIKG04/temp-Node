import express from 'express';const app = express();


// app.get, app.post, app.put, app.delete, app.all, app.use, app.listen
app.get('/', (req, res) => {
    res.status(200)
    .send('Home Page')
  })
  
  app.get('/about', (req, res) => {
    res.status(200)
    .send('About Page')
  })
  
  app.all('*', (req, res) => {
    res.status(404)
    .send('OOPS!!')
  })


app.listen(5000, ()=>{
    console.log(`Server Running Sucessfully!!`);
})