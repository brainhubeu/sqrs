import { Container } from 'inversify';
import express from 'express';
import bodyParser from 'body-parser';

import registerRoutes from './routes';

export default function createServer (container: Container) {
  const app = express();
  app.use(bodyParser.json());

  registerRoutes(app, container);

  return app;
}
