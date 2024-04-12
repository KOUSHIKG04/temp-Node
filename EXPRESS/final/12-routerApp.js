import express, {  urlencoded, json } from 'express'
const app = express()

import people from './routerPeople.js'
import auth from './routerAuth.js'

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(urlencoded({ extended: false }))
// parse json
app.use(json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})