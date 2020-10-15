import Sequelize, { Model } from 'sequelize';

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        document_number: Sequelize.BIGINT,
        birth_date: Sequelize.DATE,
        nacionality: Sequelize.STRING,
        birth_city: Sequelize.STRING,
        birth_state: Sequelize.STRING,
        sex: Sequelize.CHAR,
        breed: Sequelize.STRING,
        mother_name: Sequelize.STRING,
        father_name: Sequelize.STRING,
        home: Sequelize.STRING,
        quantity_per_home: Sequelize.INTEGER,
        activated_status: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Person;
