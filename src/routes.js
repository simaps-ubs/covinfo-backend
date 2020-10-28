import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ComorbidityController from './app/controllers/ComorbidityController';
import FormController from './app/controllers/FormController';
import 'express-async-errors';

const routes = Router();

// Users
routes.post('/users', UserController.store);

// Sessions
routes.post('/sessions', SessionController.store);

// Comorbidities
routes.get('/comorbidities', ComorbidityController.index);

// Forms
routes.post('/forms', FormController.store);
routes.get('/forms/:user_id', FormController.getUserForm);
routes.get('/forms/dependents/:user_id', FormController.getUserDependentsForm);

export default routes;
