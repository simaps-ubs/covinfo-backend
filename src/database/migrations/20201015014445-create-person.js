module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('person', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      person_auto_id: {
        type: Sequelize.INTEGER,
        references: { model: 'person', key: 'id' },
        allowNull: true,
      },
      document_number: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nacionality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      breed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mother_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      father_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      home: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity_per_home: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      activated_status: {
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
    await queryInterface.dropTable('person');
  },
};
