require('dotenv').config()
const express = require('express')
const cors = require('cors')
const migrate = require('./db/migrate')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.get('/health', (_, res) => res.json({ ok: true }))

const PORT = 3010

async function start() {
  let retries = 10
  while (retries > 0) {
    try {
      await migrate()
      break
    } catch (err) {
      retries--
      if (retries === 0) { console.error('DB never ready:', err); process.exit(1) }
      console.log(`DB not ready, retrying... (${retries} left)`)
      await new Promise(r => setTimeout(r, 2000))
    }
  }
  app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`))
}

start()
