import * as Yup from 'yup';
import { addHours, isBefore } from 'date-fns';

import User from '../models/User';
import Login from '../models/Login';
import Notification from '../models/Notification';

import ResetPassword from '../jobs/ResetPassword';
import Queue from '../../lib/Queue';

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

  async forgotPassword(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;

    const login = await Login.findOne({
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

    if (!login) {
      return res.status(404).json({ error: 'Email not found' });
    }

    const user = {
      id: login.user_id,
      name: login.user.name,
      email: login.email,
    };

    await Queue.add(ResetPassword.key, { user });

    await Notification.create({
      user_id: user.id,
      notification_type: 'reset-password',
      expires_at: addHours(new Date(), 3),
    });

    return res.json(login);
  }

  async resetPassword(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string().required().min(6),
      confirmPassword: Yup.string()
        .required()
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const login = await Login.findOne({
      where: { user_id: req.params.id },
    });

    await login.update(req.body);

    return res.json({ sucess: 'Password has been successfully reset' });
  }
}

export default new UserController();
