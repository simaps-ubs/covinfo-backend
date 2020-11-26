import PasswordService from '../services/PasswordService';
import ProviderPasswordValidation from '../../validations/ProviderPasswordValidation';

class PasswordController {

  passwordService = new PasswordService();
  providerPasswordValidation = new ProviderPasswordValidation();

  async forgotPassword(req, res) {
    await this.providerPasswordValidation.validateForgotPassword(req);

    const login = this.passwordService.forgotPassword(req);
    return res
      .status(200)
      .json({login});
  }

  async resetPassword(req, res) {
    await this.providerPasswordValidation.validateForgotPassword(req);

    await this.passwordService.resetPassword(req);
    return res
      .status(200)
      .json({ sucess: 'Senha alterada com sucesso.' });
  }

}

export default new PasswordController();
