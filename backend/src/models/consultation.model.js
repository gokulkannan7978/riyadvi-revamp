const { query } = require('../config/db');

class ConsultationModel {
  static async create({ name, email, phone, company, service, message }) {
    const text = `
      INSERT INTO consultation_requests (name, email, phone, company, service, message, status)
      VALUES ($1, $2, $3, $4, $5, $6, 'pending')
      RETURNING *;
    `;
    const params = [name, email, phone || null, company || null, service || null, message || null];
    const result = await query(text, params);
    return result.rows[0];
  }

  static async findAll({ limit = 50, offset = 0 } = {}) {
    const text = `
      SELECT * FROM consultation_requests
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2;
    `;
    const result = await query(text, [limit, offset]);
    return result.rows;
  }

  static async findById(id) {
    const text = `SELECT * FROM consultation_requests WHERE id = $1;`;
    const result = await query(text, [id]);
    return result.rows[0] || null;
  }
}

module.exports = ConsultationModel;
