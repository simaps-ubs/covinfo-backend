import * as Yup from 'yup';
import StoreProviderPersonService from '../services/StoreProviderPersonService';
import StoreDependentService from '../services/StoreDependentService';
import GetUserDependentsFormService from '../services/GetUserDependentsFormService';
import GetUserFormService from '../services/GetUserFormService';
import validateProviderPerson from '../../validations/ProviderPersonValidation';
import AppError from '../../errors/AppError';

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
    const schema = Yup.object().shape({
      // user
      name: Yup.string().required(),

      // person
      document_number: Yup.string().required(),
      birth_date: Yup.date().required(),
      nationality: Yup.string().required(),
      birth_city: Yup.string().required(),
      birth_state: Yup.string().required(),
      sex: Yup.string().required(),
      breed: Yup.string().required(),
      mother_name: Yup.string().required(),
      father_name: Yup.string().required(),

      // phone
      phone_number: Yup.string().required(),
      phone_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError('Está faltando algum valor', 400);
    }

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
