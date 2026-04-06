const jwt = require('jsonwebtoken')

function auth(req, res, next) {
  const raw = req.headers['authorization']?.replace('Bearer ', '')
  if (!raw) return res.status(401).json({ error: 'Unauthorized' })
  try {
    req.user = jwt.verify(raw, process.env.JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

module.exports = auth
