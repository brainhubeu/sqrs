import { DependencyIdentifier } from './dependencies';

/**
 * Interface of container used to resolve dependencies
 *
 * @export
 * @interface Container
 */
export interface Container {
  /**
   * Resolves an instance of type by it's identifier.
   * This method may throw an exception if type is not found or return undefined.
   *
   * @template T
   * @param {DependencyIdentifier<T>} identifier
   * @returns {(T | undefined)}
   * @memberof Container
   */
  get<T> (identifier: DependencyIdentifier<T>): T | undefined;
  /**
   * Resolves all registered instances of type by it's identifier.
   * This method never throws and returns empty array when no registrations have been found.
   *
   * @template T
   * @param {DependencyIdentifier<T>} identifier
   * @returns {T[]}
   * @memberof Container
   */
  getAll<T> (identifier: DependencyIdentifier<T>): T[];
  /**
   * Returns boolean value indicating if given identifier was registered and can be resolved.
   * This method never throws.
   *
   * @param {DependencyIdentifier<any>} identifier
   * @returns {boolean}
   * @memberof Container
   */
  isBound (identifier: DependencyIdentifier<any>): boolean;
}
