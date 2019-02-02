import path from 'path';
import { ConnectionOptions } from 'typeorm';

import entities from './domain/repositories/schemas';

const db: ConnectionOptions = {
  type: 'sqlite',
  database: path.resolve(__dirname, '../db/example.sqlite'),
  synchronize: true,
  logging: true,
  entities
};

export interface Config {
  db: ConnectionOptions;
}

const config: Config = {
  db
};

export default config;
