const boundTypeSymbol = Symbol('__boundTypeSymbol__');

export interface BoundType<T> {
  [boundTypeSymbol]?: T;
}

export type DependencyIdentifier<T> = symbol & BoundType<T>;

export const depId = <T>(id: string, reuse: boolean = false): DependencyIdentifier<T> =>
  reuse ? Symbol.for(id) : Symbol(id);

type DependencyIdentifiers<T> = { [K in keyof T]: DependencyIdentifier<T[K]>; };

export type Dependencies<T> = T extends { new(...args: infer A): any }
  ? DependencyIdentifiers<A>
  : (T extends (...args: infer A) => any ? DependencyIdentifiers<A> : never);

export interface WithDependencies<T extends any[] = any[], R = any> {
  dependencies: DependencyIdentifiers<T>;
  new (...args: T): R;
}
