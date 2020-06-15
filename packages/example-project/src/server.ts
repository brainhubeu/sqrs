import { Container } from 'inversify';
import express from 'express';

import registerRoutes from './routes';

export default function createServer (container: Container) {
  const app = express();
  app.use(express.json());

  registerRoutes(app, container);

  return app;
}
