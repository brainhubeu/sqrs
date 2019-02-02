import { DependencyIdentifier } from './dependencies';

export interface Container {
  get<T> (identifier: DependencyIdentifier<T>): T | undefined;
  getAll<T> (identifier: DependencyIdentifier<T>): T[];
  isBound (identifier: DependencyIdentifier<any>): boolean;
}
