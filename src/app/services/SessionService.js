import LoginService from './LoginService';
import AppError from '../../errors/AppError';
import authConfig from '../../config/auth';
import jwt from 'jsonwebtoken';

class SessionService {

  async create(form) {

    const { email, password } = form.body;

    const login = await new LoginService().findOne(email);

    if (!login || !(await login.checkPassword(password))) {
      throw new AppError('Usuário ou senha inválidos!', 401);
    }

    const id  = login.dataValues.user_id

    const data = {
      user: {id},
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    }

    return data;

  }

}

export default SessionService;
