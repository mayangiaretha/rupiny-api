import { Router } from 'express';
import verifiedToken from '../../middleware/auth';
import asyncMiddleware from '../../middleware/async';
import ArticlesController from '../../controllers/articles';
const router = Router();

router.get('/', ArticlesController.getAllArticles);
router.post('/', verifiedToken, ArticlesController.postAnArticle);

router.get(
  '/:id',
  verifiedToken,
  asyncMiddleware(ArticlesController.getArticleWithId)
);

router.put(
  '/:id',
  verifiedToken,
  asyncMiddleware(ArticlesController.updateAnArticle)
);

router.put(
  '/:id',
  verifiedToken,
  asyncMiddleware(ArticlesController.deleteAnArticle)
);
export default router;
