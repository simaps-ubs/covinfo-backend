module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('phone', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      person: {
        type: Sequelize.INTEGER,
        references: { model: 'person', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      phone_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('phone');
  }
};
