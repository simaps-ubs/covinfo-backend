module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comorbidities', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      comorbidity_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('comorbidities');
  },
};
