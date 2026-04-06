const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  port: 5432,
  database: 'lectures_db',
  user: 'lectures_user',
  password: process.env.POSTGRES_PASSWORD,
})

module.exports = pool
