import { Router } from 'express';
import userRoute from './user.route';

const routes = Router();

routes.use('/userAuth', userRoute);

export default routes;
