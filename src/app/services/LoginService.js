import Login from '../models/Login'
import User from '../models/User';

class LoginService {

  async findOne(email) {
    return await Login.findOne({
      where: { email },
      attributes: ['user_id', 'email'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
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
      where: {user_id}
    });
  }

}

export default LoginService;

