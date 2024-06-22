const Keyv = require('keyv');
require('dotenv').config();
const db = new Keyv(process.env.mongoDB);

module.exports = db;