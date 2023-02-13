import { Router } from 'express';
import userRoute from './users.route';
import profilesRoute from './profiles.route';

const routes = Router();

routes.use('/userAuth', userRoute);
routes.use('/profiles', profilesRoute);

export default routes;
