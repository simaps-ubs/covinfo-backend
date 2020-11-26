import SessionService from '../services/SessionService';
import ProviderSessionValidation from '../../validations/ProviderSessionValidation';

class SessionController {

  sessionService = new SessionService();
  providerSessionValidation = new ProviderSessionValidation();

  async store(req, res) {
    await this.providerSessionValidation.validateSession(req.body);

    const token = this.sessionService.create(req);
    return res
      .status(200)
      .json({ token });
  }
}

export default new SessionController();
