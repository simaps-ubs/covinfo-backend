module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ubs', {
      id:{ 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ubs_identification:{
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ubs');
  }
};
