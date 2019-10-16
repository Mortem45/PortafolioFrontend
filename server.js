const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const Mailer = require('./mail')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/' ))

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html')
})

app.get('/*', (req, res) => {
  return res.redirect('/')
})

app.post('/email', (req, res) => {
  const mailOptions = {
    to: 'ste45_007@hotmail.com',
    subject: req.body.subject,
    text: req.body.message,
    html: `<h1>${req.body.name}</h1><p>${req.body.email}</p></br></br> <p>${req.body.message}</p>`,
  }
  Mailer.sendMail(mailOptions)
  res.redirect('/')
})

http.createServer(app).listen(3000)

console.log('server Running')
