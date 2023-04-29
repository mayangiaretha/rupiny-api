import { Router } from 'express';
import verifiedToken from '../../middleware/auth';
import asyncMiddleware from '../../middleware/async';
import ArticlesController from '../../controllers/articles';
import validate from '../../middleware/validate';
const router = Router();

router.get('/', ArticlesController.getAllArticles);
router.post(
  '/',
  verifiedToken,
  validate.articles,
  ArticlesController.postAnArticle
);

router.get('/:id', asyncMiddleware(ArticlesController.getArticleWithId));

router.put(
  '/:id',
  verifiedToken,
  validate.articles,
  asyncMiddleware(ArticlesController.updateAnArticle)
);

router.delete(
  '/:id',
  verifiedToken,
  asyncMiddleware(ArticlesController.deleteAnArticle)
);
export default router;
