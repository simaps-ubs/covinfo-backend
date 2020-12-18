import Sequelize, { Model } from 'sequelize';

class PersonComorbidity extends Model {
  static init(sequelize) {
    super.init(
      {
        comorbidity_id: Sequelize.INTEGER,
        person_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default PersonComorbidity;
