const fs = require('fs')
const path = require('path')
const pool = require('./pool')
const bcrypt = require('bcryptjs')

async function migrate() {
  const migrationsDir = path.join(__dirname, '../migrations')
  const files = fs.readdirSync(migrationsDir).sort()

  for (const file of files) {
    if (!file.endsWith('.sql')) continue
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8')
    await pool.query(sql)
    console.log(`Migration applied: ${file}`)
  }

  // Seed users if table is empty
  const { rows } = await pool.query('SELECT COUNT(*) FROM users')
  if (parseInt(rows[0].count) === 0) {
    const adminHash = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin@135', 10)
    const studentHash = await bcrypt.hash(process.env.STUDENT_PASSWORD || 'Student@135', 10)
    await pool.query(
      'INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3), ($4, $5, $6)',
      ['admin', adminHash, 'admin', 'student', studentHash, 'student']
    )
    console.log('Seeded users: admin, student')
  }
}

module.exports = migrate
