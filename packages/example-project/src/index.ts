import createContainer from './di';
import createServer from './server';
import config from './config';
import { Logger, loggerId } from './infrastructure/Logger';

async function start () {
  const container = await createContainer(config);
  const app = createServer(container);

  const port = process.env.PORT || 8000;

  return app.listen(port, () => {
    const logger = container.get<Logger>(loggerId);

    logger.info(`Server started on port ${port}`);
  });
}

start()
  .catch(err => {
    console.error(err);
    process.exit(-1);
  });
