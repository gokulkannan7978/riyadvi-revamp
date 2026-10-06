const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const apiRoutes = require('./routes');
const { notFoundHandler, globalErrorHandler } = require('./middleware/errorHandler');

const app = express();

// Allowed origins for CORS (default to frontend Vite dev port 5173)
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Allow all in dev mode for flexibility
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Welcome / Root endpoint
app.get('/', (req, res) => {
  res.json({
    service: 'Riyadvi Software Technologies API',
    description: 'REST API backend for Riyadvi corporate website revamp',
    version: '1.0.0',
    documentation: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
      consultation: 'POST /api/consultation',
      healthCheckup: 'POST /api/health-checkup',
      leadMagnet: 'POST /api/lead-magnet',
      applications: 'POST /api/applications',
    },
    timestamp: new Date().toISOString(),
  });
});

// Mount all API routes under /api
app.use('/api', apiRoutes);

// Error Handling Middlewares
app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
