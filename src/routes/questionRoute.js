import Router from 'express';
import requestController from '../controllers/questionController';
import { validateQuestion } from '../middlewares/validateMiddlewares';

const router = Router();
router
  .post('/test-covid-questions/:email', validateQuestion, requestController.questionUser);

export default router;
