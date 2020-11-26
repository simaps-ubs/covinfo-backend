import userRouter from './user.routes';
import sessionsRouter from './sessions.routes';
import comorbidityRouter from './comorbidity.routes';
import formRouter from './form.routes';

const modules = [
  { name: userRouter, path: '/users' },
  { name: sessionsRouter, path: '/sessions' },
  { name: comorbidityRouter, path: '/comorbidities' },
  { name: formRouter, path: '/forms' },
];

export default modules;
