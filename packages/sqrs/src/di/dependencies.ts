const boundTypeSymbol = Symbol('__boundTypeSymbol__');

/**
 * Interface that is used to guarantee type safety when TypeScript infers types
 *
 * @export
 * @interface BoundType
 * @template T
 */
export interface BoundType<T> {
  /**
   * Used only to guarantee type safety don't use this field directly as it will always be empty.
   *
   * @deprecated
   * @type {T}
   * @memberof BoundType
   */
  [boundTypeSymbol]?: T;
}

/**
 * Describes identifier of a dependency bound to a type
 */
export type DependencyIdentifier<T> = symbol & BoundType<T>;

/**
 * Creates a symbol for given string that can be used as a dependency indentifier
 *
 * @export
 * @template T - type of dependency
 * @param {string} id - string identifier to create Symbol from
 * @param {boolean} [reuse=false] - indicates if Symbol should be reused between calls
 * @returns {DependencyIdentifier<T>}
 */
export function depId <T> (id: string, reuse: boolean = false): DependencyIdentifier<T> {
  return reuse ? Symbol.for(id) : Symbol(id);
}

type DependencyIdentifiers<T> = { [K in keyof T]: DependencyIdentifier<T[K]>; };

/**
 * Describes DependencyIdentifiers of given class or function.
 *
 * @example
 * const foo = (a: number, b: string) => 1;
 * // returns [DependencyIdentifier<number>, DependencyIdentifier<string>]
 * type FooDependencies = Dependencies<typeof foo>;
 *
 * @example
 * class Foo {
 *   constructor(a: number, b: string) {}
 * }
 * // returns [DependencyIdentifier<number>, DependencyIdentifier<string>]
 * type FooDependencies = Dependencies<typeof Foo>;
 */
export type Dependencies<T> = T extends { new(...args: infer A): any }
  ? DependencyIdentifiers<A>
  : (T extends (...args: infer A) => any ? DependencyIdentifiers<A> : never);

/**
 * Describes a class type with declared dependencies
 *
 * @example
 * class Foo {
 *   static dependencies: Dependencies<typeof Foo> = [
 *     depId<number>('number'),
 *     depId<string>('string'),
 *   ]
 *   constructor(a: number, b: string) {}
 * }
 *
 * const bar: WithDependencies = Foo;
 *
 * @export
 * @interface WithDependencies
 * @template T
 * @template R
 */
export interface WithDependencies<T extends any[] = any[], R = any> {
  dependencies: DependencyIdentifiers<T>;
  new (...args: T): R;
}
