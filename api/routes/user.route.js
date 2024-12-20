import express from 'express';
import { test, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js'; // Ensure this is implemented correctly

const router = express.Router();

// Define route for testing
router.get('/', test);

// Define route for updating a user
router.post('/update/:id', verifyToken, updateUser);

router.delete("/delete/:id", verifyToken,deleteUser)

export default router;
