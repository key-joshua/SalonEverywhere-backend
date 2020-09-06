import Router from 'express';

import userRoute from './userRoute';
import questionRoute from './questionRoute';

const router = Router();
router.use(userRoute);
router.use(questionRoute);

export default router;
