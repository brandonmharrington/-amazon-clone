const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51INnHpEljLhTgnop2z9viGRqid6YnRrUsnJTa0piSWFlcamwUpS4G8MdtjdcBxsyg3R94gfX29EH6LcMKof1jyVf00jJNRresS'
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received for: ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits
    currency: 'usd',
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-ca8c8/us-central1/api
