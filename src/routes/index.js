import { Router } from 'express';

import userRouter from './user.routes';
import sessionsRouter from './sessions.routes';
import comorbidityRouter from './comorbidity.routes';
import formRouter from './form.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/comorbidities', comorbidityRouter);
routes.use('/forms', formRouter);

export default routes;
