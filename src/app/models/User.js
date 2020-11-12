import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user_type: Sequelize.ENUM(
          'HEALTH_PROFESSIONAL',
          'COMMUNITY_PERSON',
          'DEPENDENT'
        ),
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default User;
