import AppError from '../../errors/AppError';
import User from '../models/User';
import LoginService from './LoginService';

class UserService {

  async create(form) {

    const { name, email, password, type } = form.body;

    const login = await new LoginService().findOne(email);

    if (login) {
      throw new AppError('E-mail já cadastrado.', 400);
    }

    const { id } = await User.create({ name, type });

    await new LoginService().create({ email, password, user_id: id });

    return { id, name, type, email };
  }

  async update(form) {

    const { email, oldPassword } = form.body;

    const user = this.findByPk(form.userId);

    if (email && email !== user.email) {
      const userExist = await new LoginService().findOne(email);

      if (userExist) {
        throw new AppError('E-mail já cadastrado.', 400);
      }
    }

    const login = new LoginService().findByUserId(form.userId);

    if (oldPassword && !(await login.checkPassword(oldPassword))) {
      throw new AppError('Senha incorreta.', 401);
    }

    const { image_name, image_url } = await login.update(form.body);
    const { id, name } = await user.update(form.body);

    return { id, name, email, image_name, image_url };
  }

  async findByPk(id) {
    return await User.findByPk(id);
  }

}

export default UserService;
