import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use(sessionRouter);
routes.use(appointmentsRouter);
routes.use(usersRouter);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

export default routes;
