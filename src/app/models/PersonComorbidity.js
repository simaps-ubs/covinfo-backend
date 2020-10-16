import Sequelize, { Model } from 'sequelize';
import Comorbidity from './Comorbidity';
import Person from './Person';

class PersonComorbidity extends Model {
  static init(sequelize) {
    super.init(
      {
        person: Sequelize.INTEGER,
        comorbidity: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    Person.belongsToMany(models.Comorbidity, {through: PersonComorbidity});
    Comorbidity.belongsToMany(models.Person, {through: PersonComorbidity});
  }
}

export default PersonComorbidity;
