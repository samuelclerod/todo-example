module.exports = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  mongodb: process.env.MONGODB_URL || 'mongodb://localhost:27017/dev',
}