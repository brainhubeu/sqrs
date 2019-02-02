import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { Application } from 'express';
import request from 'supertest';

import createServer from './server';
import createContainer from './di';
import config, { Config } from './config';
import Todo from './domain/models/Todo';

const databasePath = path.resolve(__dirname, `../db/e2e-test-${Date.now()}.sqlite`);
const deleteDb = () => fs.unlinkSync(databasePath);

const testConfig: Config = {
  db: {
    ...config.db,
    type: 'sqlite',
    database: databasePath
  }
};

createContainer(testConfig)
  .then(container => createServer(container))
  .then(test)
  .then(() => {
    deleteDb();
    console.log('===================');
    console.log('>>> Test passed <<<');
    console.log('===================');
  })
  .catch(err => {
    deleteDb();
    console.log('===================');
    console.log('>>> Test failed <<<');
    console.log('===================');
    throw err;
  });

async function test (app: Application) {
  await request(app)
    .post('/todos')
    .send({ id: '1', title: 'Todo 1' })
    .set('Accept', 'application/json')
    .expect(201);

  await request(app)
    .post('/todos')
    .send({ id: '2', title: 'Todo 2' })
    .set('Accept', 'application/json')
    .expect(201);

  const response = await request(app)
    .get('/todos')
    .query({ take: '25', skip: '0' })
    .set('Accept', 'application/json')
    .expect(200);

  const todos: Todo[] = response.body;
  assert(Array.isArray(todos));
  assert(todos.length === 2);
  assert(todos[0].id === '1');
  assert(todos[0].title === 'Todo 1');
  assert(todos[1].id === '2');
  assert(todos[1].title === 'Todo 2');
}
