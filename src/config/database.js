module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'convinfo',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
