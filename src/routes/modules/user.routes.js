import { Router } from 'express';
import UserController from '../../app/controllers/UserController';
import authMiddleware from '../../app/middlewares/auth';
import PasswordController from '../../app/controllers/PasswordController';

const userRouter = Router();

userRouter.post('', UserController.store);
userRouter.post('/forgot-password', PasswordController.forgotPassword);
userRouter.put('/:id/reset-password', PasswordController.resetPassword);

userRouter.use(authMiddleware);
userRouter.put('', UserController.update);

export default userRouter;
