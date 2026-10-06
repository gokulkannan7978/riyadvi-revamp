const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
const isProduction = process.env.NODE_ENV === 'production';
const useSSL = process.env.PGSSL === 'true' || isProduction;

const poolConfig = connectionString
  ? {
      connectionString,
      ssl: useSSL ? { rejectUnauthorized: false } : false,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    }
  : {
      host: process.env.PGHOST || 'localhost',
      port: parseInt(process.env.PGPORT || '5432', 10),
      user: process.env.PGUSER || 'postgres',
      password: process.env.PGPASSWORD || 'postgres',
      database: process.env.PGDATABASE || 'riyadvi_db',
      ssl: useSSL ? { rejectUnauthorized: false } : false,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    };

const pool = new Pool(poolConfig);

let isDbConnected = false;
let fallbackStore = {
  contact_enquiries: [],
  consultation_requests: [],
  health_checkup_leads: [],
  lead_magnet_leads: [],
  career_applications: [],
};

pool.on('error', (err) => {
  console.error('[PostgreSQL Pool Error]:', err.message);
  isDbConnected = false;
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() AS current_time');
    client.release();
    isDbConnected = true;
    console.log('[PostgreSQL Connected]:', result.rows[0].current_time);
    return true;
  } catch (error) {
    isDbConnected = false;
    console.warn('[PostgreSQL Notice]: Could not connect to PostgreSQL server at ' +
      (connectionString ? 'DATABASE_URL' : `${process.env.PGHOST || 'localhost'}:${process.env.PGPORT || '5432'}`) +
      '. Backend will operate in resilient demo fallback mode until PostgreSQL is online. Error: ' + error.message);
    return false;
  }
};

const query = async (text, params) => {
  if (isDbConnected) {
    try {
      return await pool.query(text, params);
    } catch (dbErr) {
      console.error('[DB Query Error]:', dbErr.message);
      throw dbErr;
    }
  }

  // Graceful in-memory fallback for local development / testing without live PostgreSQL
  console.log('[Fallback DB Executing Query]:', text);
  return handleFallbackQuery(text, params);
};

function handleFallbackQuery(text, params = []) {
  const normalized = text.trim().toLowerCase();
  
  if (normalized.startsWith('insert into contact_enquiries')) {
    const row = {
      id: fallbackStore.contact_enquiries.length + 1,
      name: params[0],
      email: params[1],
      phone: params[2],
      company: params[3],
      requirement: params[4],
      message: params[5],
      status: 'new',
      created_at: new Date().toISOString(),
    };
    fallbackStore.contact_enquiries.push(row);
    return { rows: [row], rowCount: 1 };
  }

  if (normalized.startsWith('insert into consultation_requests')) {
    const row = {
      id: fallbackStore.consultation_requests.length + 1,
      name: params[0],
      email: params[1],
      phone: params[2],
      company: params[3],
      service: params[4],
      message: params[5],
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    fallbackStore.consultation_requests.push(row);
    return { rows: [row], rowCount: 1 };
  }

  if (normalized.startsWith('insert into business_health_checkup_leads')) {
    const row = {
      id: fallbackStore.health_checkup_leads.length + 1,
      business_name: params[0],
      name: params[1],
      email: params[2],
      phone: params[3],
      website: params[4],
      digital_presence: params[5],
      marketing: params[6],
      technology: params[7],
      business_challenges: params[8],
      created_at: new Date().toISOString(),
    };
    fallbackStore.health_checkup_leads.push(row);
    return { rows: [row], rowCount: 1 };
  }

  if (normalized.startsWith('insert into lead_magnet_leads')) {
    const row = {
      id: fallbackStore.lead_magnet_leads.length + 1,
      name: params[0],
      company: params[1],
      email: params[2],
      phone: params[3],
      created_at: new Date().toISOString(),
    };
    fallbackStore.lead_magnet_leads.push(row);
    return { rows: [row], rowCount: 1 };
  }

  if (normalized.startsWith('insert into career_applications')) {
    const row = {
      id: fallbackStore.career_applications.length + 1,
      name: params[0],
      email: params[1],
      phone: params[2],
      position: params[3],
      resume_url: params[4],
      message: params[5],
      status: 'submitted',
      created_at: new Date().toISOString(),
    };
    fallbackStore.career_applications.push(row);
    return { rows: [row], rowCount: 1 };
  }

  if (normalized.startsWith('select * from contact_enquiries')) {
    const rows = [...fallbackStore.contact_enquiries].reverse();
    return { rows, rowCount: rows.length };
  }

  if (normalized.startsWith('select * from consultation_requests')) {
    const rows = [...fallbackStore.consultation_requests].reverse();
    return { rows, rowCount: rows.length };
  }

  if (normalized.startsWith('select * from business_health_checkup_leads')) {
    const rows = [...fallbackStore.health_checkup_leads].reverse();
    return { rows, rowCount: rows.length };
  }

  if (normalized.startsWith('select * from lead_magnet_leads')) {
    const rows = [...fallbackStore.lead_magnet_leads].reverse();
    return { rows, rowCount: rows.length };
  }

  if (normalized.startsWith('select * from career_applications')) {
    const rows = [...fallbackStore.career_applications].reverse();
    return { rows, rowCount: rows.length };
  }

  return { rows: [], rowCount: 0 };
}

module.exports = {
  pool,
  query,
  testConnection,
  isDbConnected: () => isDbConnected,
  getFallbackStore: () => fallbackStore,
};
