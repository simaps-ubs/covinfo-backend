import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ComorbidityController from './app/controllers/ComorbidityController';

const routes = new Router();

// Users
routes.post('/users', UserController.store);

// Sessions
routes.post('/sessions', SessionController.store);

// Comorbidities
routes.get('/comorbidities', ComorbidityController.index);

export default routes;
