import Sequelize, { Model } from 'sequelize';

class Comorbidity extends Model {
  static init(sequelize) {
    super.init(
      {
        comorbidity_description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Comorbidity;
