const { query } = require('../config/db');

class LeadMagnetModel {
  static async create({ name, company, email, phone }) {
    const text = `
      INSERT INTO lead_magnet_leads (name, company, email, phone)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const params = [name, company || null, email, phone || null];
    const result = await query(text, params);
    return result.rows[0];
  }

  static async findAll({ limit = 50, offset = 0 } = {}) {
    const text = `
      SELECT * FROM lead_magnet_leads
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2;
    `;
    const result = await query(text, [limit, offset]);
    return result.rows;
  }

  static async findById(id) {
    const text = `SELECT * FROM lead_magnet_leads WHERE id = $1;`;
    const result = await query(text, [id]);
    return result.rows[0] || null;
  }
}

module.exports = LeadMagnetModel;
