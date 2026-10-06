const { query } = require('../config/db');

class CareerModel {
  static async create({ name, email, phone, position, resume_url, message }) {
    const text = `
      INSERT INTO career_applications (name, email, phone, position, resume_url, message, status)
      VALUES ($1, $2, $3, $4, $5, $6, 'submitted')
      RETURNING *;
    `;
    const params = [name, email, phone || null, position, resume_url || null, message || null];
    const result = await query(text, params);
    return result.rows[0];
  }

  static async findAll({ limit = 50, offset = 0 } = {}) {
    const text = `
      SELECT * FROM career_applications
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2;
    `;
    const result = await query(text, [limit, offset]);
    return result.rows;
  }

  static async findById(id) {
    const text = `SELECT * FROM career_applications WHERE id = $1;`;
    const result = await query(text, [id]);
    return result.rows[0] || null;
  }
}

module.exports = CareerModel;
