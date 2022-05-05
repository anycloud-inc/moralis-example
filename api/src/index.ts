require('dotenv').config()
import cors = require('cors')
import express from 'express'
import 'reflect-metadata'
import * as moralis from './lib/moralis'

const app = express()
const port = Number(process.env.PORT) || 3030
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/signin', async (req, res) => {
  const sessionToken = req.body.sessionToken
  if (await moralis.verifySessionToken(sessionToken)) {
    console.log('Session token is successfuly verified.')
  } else {
    console.log('Session token is invalid.')
  }
  res.end()
})
