import Login from '../models/Login'

class LoginService {

  async findOne(email) {
    return await Login.findOne({
      where: { email }
    });
  }

  async create(email, password, user_id) {
    await Login.create({
      email,
      password,
      user_id,
    });
  }

}

export default LoginService;

