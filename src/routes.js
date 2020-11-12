import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ComorbidityController from './app/controllers/ComorbidityController';
import FormController from './app/controllers/FormController';
import authMiddleware from './app/middlewares/auth';
import 'express-async-errors';

const routes = Router();

// Users
routes.post('/users', UserController.store);
routes.post('/users/forgot-password', UserController.forgotPassword);
routes.put('/users/:id/reset-password', UserController.resetPassword);

// Sessions
routes.post('/sessions', SessionController.store);

// Comorbidities
routes.get('/comorbidities', ComorbidityController.index);

// Forms
routes.post('/forms', FormController.storeProviderPerson);
routes.post('/forms/dependents', FormController.storeDependent);
routes.get('/forms/:user_id', FormController.getUserForm);
routes.get('/forms/dependents/:user_id', FormController.getUserDependentsForm);

// Auth Routes
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
