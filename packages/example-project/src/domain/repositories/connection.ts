import { Connection } from 'typeorm';
import { depId } from 'sqrs';

export const connectionId = depId<Connection>('Connection');
