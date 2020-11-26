import AppError from '../../errors/AppError';
import User from '../models/User';
import LoginService from './LoginService';

class UserService {

  async create(form) {

    const { name, email, password, type } = form.body;

    const loginService = new LoginService();

    const login = await loginService.findOne(email);

    if (login) {
      throw new AppError('E-mail já cadastrado.', 400);
    }

    const { id } = await User.create({ name, type });

    await loginService.create(email, password, id);

  }

}

export default UserService;
