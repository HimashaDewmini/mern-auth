import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Define route for testing
router.get('/', test);

export default router;
