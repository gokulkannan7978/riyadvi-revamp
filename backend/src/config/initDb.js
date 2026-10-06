const { pool } = require('./db');

const schemaSQL = `
-- Riyadvi Software Technologies - PostgreSQL Database Schema

-- 1. Contact Enquiries Table
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  requirement VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Consultation Requests Table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Business Health Checkup Leads Table
CREATE TABLE IF NOT EXISTS business_health_checkup_leads (
  id SERIAL PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  website VARCHAR(255),
  digital_presence TEXT,
  marketing TEXT,
  technology TEXT,
  business_challenges TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Lead Magnet Leads Table
CREATE TABLE IF NOT EXISTS lead_magnet_leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Career Applications Table
CREATE TABLE IF NOT EXISTS career_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  position VARCHAR(255) NOT NULL,
  resume_url TEXT,
  message TEXT,
  status VARCHAR(50) DEFAULT 'submitted',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Helpful Indexes for Filtering & Performance
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email ON contact_enquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status ON contact_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_consultation_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_health_checkup_email ON business_health_checkup_leads(email);
CREATE INDEX IF NOT EXISTS idx_lead_magnet_email ON lead_magnet_leads(email);
CREATE INDEX IF NOT EXISTS idx_career_applications_position ON career_applications(position);
`;

const initDb = async () => {
  console.log('[DB Init]: Initializing database schema...');
  try {
    const client = await pool.connect();
    await client.query(schemaSQL);
    client.release();
    console.log('[DB Init Success]: All 5 tables and indexes verified/created successfully.');
    return true;
  } catch (error) {
    console.warn('[DB Init Warning]: Unable to execute SQL migration against PostgreSQL: ' + error.message);
    return false;
  }
};

if (require.main === module) {
  initDb().then(() => process.exit(0)).catch(() => process.exit(1));
}

module.exports = { initDb, schemaSQL };
