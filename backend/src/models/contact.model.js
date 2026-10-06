const { query } = require('../config/db');

class ContactModel {
  static async create({ name, email, phone, company, requirement, message }) {
    const text = `
      INSERT INTO contact_enquiries (name, email, phone, company, requirement, message, status)
      VALUES ($1, $2, $3, $4, $5, $6, 'new')
      RETURNING *;
    `;
    const params = [name, email, phone || null, company || null, requirement || null, message];
    const result = await query(text, params);
    return result.rows[0];
  }

  static async findAll({ limit = 50, offset = 0 } = {}) {
    const text = `
      SELECT * FROM contact_enquiries
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2;
    `;
    const result = await query(text, [limit, offset]);
    return result.rows;
  }

  static async findById(id) {
    const text = `SELECT * FROM contact_enquiries WHERE id = $1;`;
    const result = await query(text, [id]);
    return result.rows[0] || null;
  }
}

module.exports = ContactModel;
