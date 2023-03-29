import { Router } from 'express';
import userRoute from './users.route';
import profilesRoute from './profiles.route';
import articlesRoute from './articles.route';

const routes = Router();

routes.use('/userAuth', userRoute);
routes.use('/profiles', profilesRoute);
routes.use('/articles', articlesRoute);

export default routes;
