import PasswordService from '../services/PasswordService';
import ProviderPasswordValidation from '../../validations/ProviderPasswordValidation';

class PasswordController {

  async forgotPassword(req, res) {
    await new ProviderPasswordValidation().validateForgotPassword(req);

    const login = await new PasswordService().forgotPassword(req).catch(err => res.status(err.statusCode).json({ message: err.message }));
    return res
      .status(200)
      .json({login});
  }

  async resetPassword(req, res) {
    await new ProviderPasswordValidation().validateForgotPassword(req).catch(err => res.status(err.statusCode).json({ message: err.message }));

    await new PasswordService().resetPassword(req).catch(err => res.status(err.statusCode).json({ message: err.message }));
    return res
      .status(200)
      .json({ message: 'Senha alterada com sucesso.' });
  }

}

export default new PasswordController();
