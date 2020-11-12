import Sequelize, { Model } from 'sequelize';

class Phone extends Model {
  static init(sequelize) {
    super.init(
      {
        phone_number: Sequelize.STRING,
        phone_code: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Person, { foreignKey: 'person_id' });
  }
}

export default Phone;
