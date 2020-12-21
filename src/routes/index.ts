import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use(appointmentsRouter);
routes.use(usersRouter);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
