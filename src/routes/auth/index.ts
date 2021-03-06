
import express from 'express';

// API keys and Passport configuration
import passport from 'passport';


const router = express.Router();

/**
 * OAuth authentication routes. (Sign in)
 */
router.get('/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect(req.session.returnTo || '/');
});


export default router;