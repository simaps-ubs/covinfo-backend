import { Router } from 'express';
import SessionController from '../../app/controllers/SessionController';

const sessionsRouter = Router();

sessionsRouter.post('', SessionController.store);

export default sessionsRouter;
