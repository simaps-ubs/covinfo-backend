import LoginService from './LoginService';
import AppError from '../../errors/AppError';
import Queue from '../../lib/Queue';
import ResetPassword from '../jobs/ResetPassword';
import { addHours } from "date-fns";
import NotificationService from './NotificationService';

class PasswordService {

  loginService = new LoginService();

  async forgotPassword(form) {

    const { email } = form.body;

    const login = await this.loginService.findOne(email);

    if (!login) {
      throw new AppError('E-mail não encontrado!', 400);
    }

    const user = {
      id: login.user_id,
      name: login.user.name,
      email: login.email,
    };

    await Queue.add(ResetPassword.key, { user });

    await NotificationService.create({
      user_id: user.id,
      notification_type: 'reset-password',
      expires_at: addHours(new Date(), 3),
    });

    return login;
  }

  async resetPassword(form) {

    const user_id = form.params.id;
    const login = await this.loginService.findByUserId(user_id);

    if (!login) {
      throw new AppError('Usuário não encontrado!', 400);
    }

    const { password } = form.body;
    await login.update(password);
  }

}

export default PasswordService;
