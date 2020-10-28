import Sequelize, { Model } from 'sequelize';

class Address extends Model {
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
    this.belongsTo(models.Person, { foreignKey: 'person_id' });
  }
}

export default Address;
