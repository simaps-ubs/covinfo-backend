import StoreProviderPersonService from '../services/StoreProviderPersonService';
import StoreDependentService from '../services/StoreDependentService';
import GetUserDependentsFormService from '../services/GetUserDependentsFormService';
import GetUserFormService from '../services/GetUserFormService';
import validateProviderPerson from '../../validations/ProviderPersonValidation';
import validateDependent from '../../validations/DependentValidation';

class FormController {
  async storeProviderPerson(req, res) {
    await validateProviderPerson(req.body);

    const storeProviderService = new StoreProviderPersonService();
    await storeProviderService.execute(req.body);

    return res
      .status(200)
      .json({ success: true, message: 'Ficha cadastrada com sucesso' });
  }

  async storeDependent(req, res) {
    await validateDependent(req.body);

    const storeDependentService = new StoreDependentService();
    await storeDependentService.execute(req.body);

    return res.status(200).json({
      success: true,
      message: 'Ficha de dependente cadastrada com sucesso',
    });
  }

  async getUserDependentsForm(req, res) {
    const getUserDependentsFormService = new GetUserDependentsFormService();
    const userForm = await getUserDependentsFormService.execute(req.body);
    return res.status(200).json(userForm);
  }

  async getUserForm(req, res) {
    const getUserFormService = new GetUserFormService();
    const userForm = await getUserFormService.execute(req.body);
    return res.status(200).json(userForm);
  }
}

export default new FormController();
