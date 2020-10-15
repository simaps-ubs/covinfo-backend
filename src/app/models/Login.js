import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Login extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        encrypted_pass: Sequelize.STRING,
        image_name: Sequelize.STRING,
        image_url: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.image_name) {
              return `http://localhost:3333/files/${this.image_name}`;
            }
            return null;
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

  checkPassword(password) {
    return bcrypt.compare(password, this.encrypted_pass);
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Login;
