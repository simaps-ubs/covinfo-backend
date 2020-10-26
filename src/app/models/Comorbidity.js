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

  static associate(models) {
    this.belongsToMany(models.Person, {
      through: 'PersonComorbidity',
      as: 'people',
      foreignKey: 'comorbidity_id',
      otherKey: 'person_id',
    });
  }
}

export default Comorbidity;
