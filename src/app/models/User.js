import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        encrypted_pass: Sequelize.STRING,
        image_name: Sequelize.STRING,
        image_url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.avatar}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.encrypted_pass = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}

export default User;
