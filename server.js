const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const compression = require('compression')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
  // app.use(enforce.HTTPS({ trustProtoHeader: true }))
  app.use(express.static(path.join(__dirname, 'frontend/build')))

  app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
  })
}

app.listen(port, error => {
  if (error) throw error
  console.log('Server running on port ' + port)
})

app.post('/payment', (request, response) => {
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: 'sek',
  }

  stripe.charges.create(body, (stripeErr, stripeResponse) => {
    if (stripeErr) {
      response.status(500).send({ error: stripeErr })
    } else {
      response.status(200).send({ success: stripeResponse })
    }
  })
})
