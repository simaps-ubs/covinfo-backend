import SessionService from '../services/SessionService';
import ProviderSessionValidation from '../../validations/ProviderSessionValidation';

class SessionController {

  async store(req, res) {
    await new ProviderSessionValidation().validateSession(req.body);

    const responde = await new SessionService().create(req).catch(err => res.status(err.statusCode).json({ message: err.message }));
    return res
      .status(200)
      .json( responde);
  }
}

export default new SessionController();
