import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/auth';
import Login from '../models/Login';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const login = await Login.findOne({
      where: { email },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'user_type'],
        },
      ],
    });

    if (!login) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await login.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, user_id, image_name, image_url } = login;

    return res.json({
      user: {
        id: user_id,
        name: login.user.name,
        user_type: login.user.user_type,
        email,
        image_name,
        image_url,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
