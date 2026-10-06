const { query } = require('../config/db');

class HealthCheckupModel {
  static async create({
    business_name,
    name,
    email,
    phone,
    website,
    digital_presence,
    marketing,
    technology,
    business_challenges,
  }) {
    const text = `
      INSERT INTO business_health_checkup_leads (
        business_name, name, email, phone, website,
        digital_presence, marketing, technology, business_challenges
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;

    const formatField = (val) => (val && typeof val === 'object' ? JSON.stringify(val) : val || null);

    const params = [
      business_name,
      name,
      email,
      phone || null,
      website || null,
      formatField(digital_presence),
      formatField(marketing),
      formatField(technology),
      formatField(business_challenges),
    ];

    const result = await query(text, params);
    return result.rows[0];
  }

  static async findAll({ limit = 50, offset = 0 } = {}) {
    const text = `
      SELECT * FROM business_health_checkup_leads
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2;
    `;
    const result = await query(text, [limit, offset]);
    return result.rows;
  }

  static async findById(id) {
    const text = `SELECT * FROM business_health_checkup_leads WHERE id = $1;`;
    const result = await query(text, [id]);
    return result.rows[0] || null;
  }
}

module.exports = HealthCheckupModel;
