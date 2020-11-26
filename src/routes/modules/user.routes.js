import { Router } from 'express';
import UserController from '../../app/controllers/UserController';
import authMiddleware from '../../app/middlewares/auth';

const userRouter = Router();

userRouter.post('', UserController.store);
userRouter.post('/forgot-password', UserController.forgotPassword);
userRouter.put('/:id/reset-password', UserController.resetPassword);

userRouter.use(authMiddleware);
userRouter.put('', UserController.update);

export default userRouter;
