require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,

  // config for sqlite
  operatorAliases: 'false',
  storage: './tests/database.sqlite',
  logging: false,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
