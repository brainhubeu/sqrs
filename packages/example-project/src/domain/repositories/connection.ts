import { Connection } from 'typeorm';
import { depId } from '@brainhubeu/sqrs';

export const connectionId = depId<Connection>('Connection');
