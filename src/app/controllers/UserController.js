import ProviderUserValidation from '../../validations/ProviderUserValidation';
import UserService from '../services/UserService';

class UserController {

  providerUserValidation = new ProviderUserValidation();
  userService = new UserService();

  async store(req, res) {
    await this.providerUserValidation.validateUserCreate(req.body);

    const userCreated = this.userService.create(req);
    return res
      .status(200)
      .json({ userCreated });
  }

  async update(req, res) {
    await this.providerUserValidation.validateUserUpdate(req.body);

    const userUpdated = this.userService.update(req);
    return res
      .status(200)
      .json({ userUpdated });
  }

}

export default new UserController();
