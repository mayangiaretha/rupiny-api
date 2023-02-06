import { Router } from 'express';
import asyncMiddleware from '../../middleware/async';
import verifiedToken from '../../middleware/auth';
// import validate from '../../middleware/validate';
import ProfilesController from "../../controllers/profiles";

const router = Router();

router.get(
  '/find/:id',
  verifiedToken,
  asyncMiddleware(ProfilesController.getAUser)
);
router.put(
  '/sub/:id',
  verifiedToken,
  asyncMiddleware(ProfilesController.subscribe)
);
router.put(
  '/unsub/:id',
  verifiedToken,
  asyncMiddleware(ProfilesController.unsubscribe)
);
router.put(
  '/like/:articleId',
  verifiedToken,
  asyncMiddleware(ProfilesController.like)
);
router.put(
  '/dislike/articleId',
  verifiedToken,
  asyncMiddleware(ProfilesController.dislike)
);
router.put(
  '/:id',
  verifiedToken,
  asyncMiddleware(ProfilesController.updatedAUser)
);
router.delete(
  '/id',
  verifiedToken,
  asyncMiddleware(ProfilesController.deleteAUser)
);

export default router;
