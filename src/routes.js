import { Router } from 'express';
import swaggerUi from 'express-swaggerize-ui';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.use('/api-docs', swaggerUi());

routes.post('/users', UserController.store);

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

export default routes;
