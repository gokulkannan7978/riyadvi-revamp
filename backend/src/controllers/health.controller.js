const { isDbConnected } = require('../config/db');
const { successResponse } = require('../utils/apiResponse');

const checkHealth = (req, res) => {
  const connected = isDbConnected();
  const healthData = {
    status: 'healthy',
    service: 'Riyadvi Software Technologies API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: Math.floor(process.uptime()),
    database: {
      engine: 'PostgreSQL',
      connected,
      mode: connected ? 'live_postgresql' : 'resilient_demo_fallback',
    },
    systemTime: new Date().toISOString(),
  };

  return successResponse(res, healthData, 'API service is operational.');
};

module.exports = {
  checkHealth,
};
