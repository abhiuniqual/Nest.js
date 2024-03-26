require('dotenv').config();

module.exports = {
  client: process.env.DB_CONNECTION || 'mysql',
  port: +process.env.DB_PORT || 3306,
  version: '8.0',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
