import { Router } from 'express';
import userRoute from './users.route';
import usersRoute from './profiles.route';

const routes = Router();

routes.use('/userAuth', userRoute);
routes.use('/users', usersRoute);

export default routes;
