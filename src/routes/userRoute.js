import Router from 'express';
import userController from '../controllers/userController';
import { validateUser } from '../middlewares/validateMiddlewares';

const router = Router();
router
  .post('/save-user', validateUser, userController.saveUser);

export default router;
