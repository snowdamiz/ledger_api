const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtSecret = process.env.JWT_SECRET

function protect (req, res, next) {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) res.status(401).json({ message: 'Invalid Token,' })
            else next()
        })
    } else res.status(401).json({ message: 'No Token Provided.' })
}

function generateToken(user) {
    const payload = { id: user.id, email: user.email }
    const options = { expiresIn: '1w' }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = {
    jwtSecret,
    protect,
    generateToken
}