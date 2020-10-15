module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'user_covinfo',
  password: 'pgpassword',
  database: 'covinfo',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
