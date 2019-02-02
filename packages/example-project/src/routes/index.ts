import { Container } from 'inversify';
import { Request, Response } from 'express';
import todos from './todos';
import { Route } from './Route';
import { routeContextId, RouteContext } from './RouteContext';

const routes: Route[] = [
  ...todos
];

const registerRoutes = (expressApp: Express.Application, container: Container) => {
  routes.forEach(route => {
    const method = route.method.toLowerCase();
    const app = expressApp as any;

    app[method](route.path, (req: Request, res: Response) => {
      const context = container.get<RouteContext>(routeContextId);

      return route.handle(req, res, context);
    });
  });
};

export default registerRoutes;
