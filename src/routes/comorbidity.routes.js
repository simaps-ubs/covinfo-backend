import { Router } from 'express';
import ComorbidityController from '../app/controllers/ComorbidityController';

const comorbidityRouter = Router();

comorbidityRouter.get('', ComorbidityController.index);

export default comorbidityRouter;
