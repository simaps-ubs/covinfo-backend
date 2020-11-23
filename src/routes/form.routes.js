import { Router } from 'express';
import FormController from '../app/controllers/FormController';

const formRouter = Router();

formRouter.post('', FormController.storeProviderPerson);
formRouter.post('/dependents', FormController.storeDependent);
formRouter.get('/:user_id', FormController.getUserForm);
formRouter.get('/dependents/:user_id', FormController.getUserDependentsForm);

export default formRouter;
