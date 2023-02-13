import { Router } from 'express';
import asyncMiddleware from '../../middleware/async';
import verifiedToken from '../../middleware/auth';
import validate from '../../middleware/validate';
import ProfilesController from '../../controllers/profiles';

const router = Router();

router.get('/',ProfilesController.getAllProfiles)

router.get(
  '/:id',
  verifiedToken,
  asyncMiddleware(ProfilesController.getAProfile)
);

router.put(
  '/:id',
  verifiedToken,
  validate.profiled,
  asyncMiddleware(ProfilesController.updatedAUser)
);

export default router;
