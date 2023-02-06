// import { Router } from 'express';
// import asyncMiddleware from '../../middleware/async';
// import validate from '../../middleware/validate';
// import ArticlesController from '../../controllers/articles';
//
// const router = Router();
//
// router.post(
//   '/',
//   validate.articleValidation,
//   asyncMiddleware(ArticlesController.postAnArticle)
// );
// router.get(
//   '/',
//   validate,
//   asyncMiddleware(ArticlesController.getArticles)
// );
// router.get(
//   '/:id',
//   validate,
//   asyncMiddleware(ArticlesController.getArticleWithId)
// );
// router.put(
//   '/:id',
//   validate.articleValidation,
//   asyncMiddleware(ArticlesController.updateAnArticle)
// );
// router.delete(
//   '/:id',
//   validate,
//   asyncMiddleware(ArticlesController.deleteAnArticle)
// );
