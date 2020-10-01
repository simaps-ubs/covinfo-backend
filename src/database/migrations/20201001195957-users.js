module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
