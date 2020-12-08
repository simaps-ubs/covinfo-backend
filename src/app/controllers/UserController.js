import ProviderUserValidation from '../../validations/ProviderUserValidation';
import UserService from '../services/UserService';
import { next } from 'sucrase/dist/parser/tokenizer';

class UserController {
  async store(req, res) {
    console.log('aqui 1', req.body);
    await new ProviderUserValidation().validateUserCreate(req.body);
    console.log('aqui 2', req.body);

    await new UserService()
      .create(req)
      .catch((err) =>
        res.status(err.statusCode).json({ message: err.message })
      );
    return res.status(200).json({ message: 'Usuário criado com sucesso!' });
  }

  async update(req, res) {
    await new ProviderUserValidation().validateUserUpdate(req.body);

    await new UserService()
      .update(req)
      .catch((err) =>
        res.status(err.statusCode).json({ message: err.message })
      );
    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  }
}

export default new UserController();
