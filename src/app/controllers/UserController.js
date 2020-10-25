import * as Yup from 'yup';

import User from '../models/User';
import Login from '../models/Login';
import Mail from '../../lib/Mail';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { name, email, password } = req.body;

    const emailExists = await Login.findOne({
      where: { email },
    });

    if (emailExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const { id, user_type } = await User.create({ name });

    await Login.create({
      email,
      password,
      user_id: id,
    });

    return res.json({
      id,
      name,
      user_type,
      email,
    });
  }

  async resetPassword(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;

    const login = await Login.findOne({
      where: { email },
      include: ['user_id', 'email'],
    });

    if (login) {
      return res.status(404).json({ error: 'Email not found' });
    }

    const user = User.findOne(login.user_id);

    await Mail.sendMail({
      from: 'Equipe covinfo <no-replay@covinfo.com.br>',
      to: `${user.name} <${email}>`,
      subjetc: 'Recuperação de Senha!',
      text: `Você pediu para resetar sua senha ${user.name}`,
    });

  }
}

export default new UserController();
