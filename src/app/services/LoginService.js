import Login from '../models/Login';
import User from '../models/User';

class LoginService {
  async findOne(email) {
    return Login.findOne({
      where: { email },
      attributes: ['user_id', 'email', 'encrypted_pass'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'user_type'],
        },
      ],
    });
  }

  async create(login) {
    await Login.create(login);
  }

  async update(login) {
    await Login.update(login);
  }

  async findByUserId(user_id) {
    return Login.findOne({
      where: { user_id },
    });
  }
}

export default LoginService;
