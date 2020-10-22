import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ComorbidityController from './app/controllers/ComorbidityController';
import FormController from './app/controllers/FormController';

const routes = new Router();

// Users
routes.post('/users', UserController.store);

// Sessions
routes.post('/sessions', SessionController.store);

// Comorbidities
routes.get('/comorbidities', ComorbidityController.index);

// Forms
routes.post('/forms', FormController.store);
routes.get('/forms', FormController.index);

export default routes;
