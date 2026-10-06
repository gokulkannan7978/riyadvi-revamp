require('dotenv').config();
const app = require('./app');
const { testConnection, pool } = require('./config/db');
const { initDb } = require('./config/initDb');

const PORT = parseInt(process.env.PORT || '5000', 10);

const startServer = async () => {
  console.log('----------------------------------------------------');
  console.log('🚀 Starting Riyadvi Software Technologies API Server');
  console.log('----------------------------------------------------');

  // Test Database Connection and Initialize Schema if reachable
  const dbReachable = await testConnection();
  if (dbReachable) {
    await initDb();
  }

  const server = app.listen(PORT, () => {
    console.log(`[Server Status]: Listening on port ${PORT}`);
    console.log(`[Health Check]: http://localhost:${PORT}/api/health`);
    console.log(`[Endpoints]:`);
    console.log(`  - POST http://localhost:${PORT}/api/contact`);
    console.log(`  - POST http://localhost:${PORT}/api/consultation`);
    console.log(`  - POST http://localhost:${PORT}/api/health-checkup`);
    console.log(`  - POST http://localhost:${PORT}/api/lead-magnet`);
    console.log(`  - POST http://localhost:${PORT}/api/applications`);
    console.log('----------------------------------------------------');
  });

  // Graceful Shutdown handlers
  const handleShutdown = async (signal) => {
    console.log(`\n[Server]: Received ${signal}. Gracefully shutting down...`);
    server.close(async () => {
      console.log('[Server]: Closed HTTP server.');
      try {
        await pool.end();
        console.log('[PostgreSQL]: Connection pool closed.');
      } catch (err) {
        console.error('[PostgreSQL Error during close]:', err.message);
      }
      process.exit(0);
    });
  };

  process.on('SIGINT', () => handleShutdown('SIGINT'));
  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
};

startServer().catch((error) => {
  console.error('[Server Startup Failure]:', error);
  process.exit(1);
});
