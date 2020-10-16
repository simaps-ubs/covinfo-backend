import Sequelize, { Model } from 'sequelize';

class Phone extends Model {
  static init(sequelize) {
    super.init(
      {
        phone_number: Sequelize.BIGINT,
        phone_code: Sequelize.INTEGER,
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

export default Phone;
