import Sequelize, { Model } from 'sequelize';

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        document_number: Sequelize.BIGINT,
        birth_date: Sequelize.DATE,
        nacionality: Sequelize.STRING,
        birth_city: Sequelize.STRING,
        birth_state: Sequelize.STRING,
        sex: Sequelize.STRING(1),
        breed: Sequelize.STRING,
        mother_name: Sequelize.STRING,
        father_name: Sequelize.STRING,
        quantity_per_home: Sequelize.INTEGER,
        activated_status: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    // this.belongsTo(models.User, { foreignKey: 'user_auto_id' });
    this.belongsTo(models.Address, { foreignKey: 'address_id' });

    this.hasOne(models.Phone);

    this.belongsToMany(models.Comorbidity, {
      through: 'PersonComorbidity',
      as: 'Comorbidities',
      foreignKey: 'person_id',
      otherKey: 'comorbidity_id',
    });
  }
}

export default Person;
