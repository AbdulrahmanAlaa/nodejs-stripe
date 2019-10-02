import express from 'express';
const router = express.Router();
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/pay', (req, res, next) => {
  const amount = 20 * 100;
  // create a customer
  stripe.customers
    .create({
      email: req.body.stripeEmail, // customer email
      source: req.body.stripeToken // token for the card
    })
    .then((customer: any) =>
      stripe.charges.create({
        // charge the customer
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      })
    )
    .then((charge: any) => {
      res.render('pay');
    });
});

export default router;
