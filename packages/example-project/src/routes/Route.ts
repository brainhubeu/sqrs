import { RouteContext } from './RouteContext';
import { Request, Response } from 'express';

export enum HTTPMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
  PATCH = 'PATCH'
}

export interface Route {
  path: string;
  method: HTTPMethod;
  handle (req: Request, res: Response, context: RouteContext): void;
}
