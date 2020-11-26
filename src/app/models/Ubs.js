import Sequelize, { Model } from 'sequelize';

class Ubs extends Model {
  static init(sequelize) {
    super.init(
      {
        ubs_identification: Sequelize.BIGINT,
        city: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default Ubs;
