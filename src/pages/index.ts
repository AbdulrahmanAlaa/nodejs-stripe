import express from 'express';
import homeController from '../controllers/home.controller';
const router = express.Router();
router.use('/', homeController.index);
export default router;
