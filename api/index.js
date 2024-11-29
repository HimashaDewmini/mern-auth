import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

// Debug: Check if the environment variables are loaded correctly
console.log('Loaded Environment Variables:', {
    MONGO_URI: process.env.MONGO ? 'Available' : 'Missing',
});

// MongoDB connection
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err); // Debugging log
    });

const app = express();

// Debug: Check server initialization
console.log('Initializing Express server...');

app.use(express.json());
app.use(cookieParser());

// Debug: Middleware logs
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/user', userRoutes);
console.log('User routes loaded: /api/user');

app.use('/api/auth', authRoutes);
console.log('Auth routes loaded: /api/auth');

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error occurred:', err); // Debugging log for errors
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode: statusCode,
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
