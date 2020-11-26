import { Router } from 'express';
import modules from './modules';

const routes = Router();

modules.forEach((module) => routes.use(module.path, module.name));

export default routes;
