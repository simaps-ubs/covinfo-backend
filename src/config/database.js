module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: 'user_covinfo',
  password: 'pgpassword',
  database: 'covinfo',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
