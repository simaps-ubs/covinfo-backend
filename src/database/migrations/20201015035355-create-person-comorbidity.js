module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('person_comorbidities', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      person_id: {
        type: Sequelize.INTEGER,
        references: { model: 'people', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      comorbidity: {
        type: Sequelize.INTEGER,
        references: { model: 'comorbidities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('person_comorbidities');
  },
};
