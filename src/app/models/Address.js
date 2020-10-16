import Sequelize, { Model } from 'sequelize';

class Adress extends Model {
  static init(sequelize) {
    super.init(
      {
        zip_code: Sequelize.BIGINT,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Persons, { foreignKey: 'person' });
  }
}

export default Adress;
