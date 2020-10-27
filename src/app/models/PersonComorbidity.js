import Sequelize, { Model } from 'sequelize';
import Comorbidity from './Comorbidity';
import Person from './Person';

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

  // static associate(models) {
  //   Person.belongsToMany(models.Comorbidity, {
  //     through: PersonComorbidity,
  //     foreignKey: 'comorbidity_id',
  //   });
  //   Comorbidity.belongsToMany(models.Person, {
  //     through: PersonComorbidity,
  //     foreignKey: 'person_id',
  //   });
  // }
}

export default PersonComorbidity;
