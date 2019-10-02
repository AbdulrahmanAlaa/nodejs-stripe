// Registering All Application Routes
import express from 'express';
import stripe from './stripe';
import auth from './auth';

const router = express.Router();


/** Initializing Stripe Module Routes */
router.use('/stripe', stripe);

/** Initializing Authentication Module Routes */
router.use('/auth', auth);

export default router;
