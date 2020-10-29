import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/users/forgot-password', UserController.forgotPassword);
routes.put('/users/reset-password/:id', UserController.resetPassword);

export default routes;
