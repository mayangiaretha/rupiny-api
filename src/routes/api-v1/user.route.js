import { Router } from 'express';
import asyncMiddleware from '../../middleware/async';
import validate from '../../middleware/validate';
import UserController from '../../controllers/user';

const router = Router();

router.post(
  '/register',
  validate.authRegister,
  asyncMiddleware(UserController.registerAUser)
);
router.post(
  '/signIn',
  validate.login,
  asyncMiddleware(UserController.loginUser)
);

export default router;
