import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zip_code: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        street: Sequelize.STRING,
        house_number: Sequelize.STRING,
        home_situation: Sequelize.STRING,
        lat: Sequelize.STRING,
        lng: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Address;
