import LoginService from './LoginService';
import AppError from '../../errors/AppError';
import authConfig from '../../config/auth';
import jwt from 'jsonwebtoken';

class SessionService {

  loginService = new LoginService();

  async create(form) {

    const { email, password } = form.body;

    const login = await this.loginService.findOne(email);

    if (!login || !(await login.checkPassword(password))) {
      throw new AppError('Usuário ou senha inválidos!', 401);
    }

    const { id } = login;

    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

  }

}

export default SessionService;
