/**
 * @module sqrs
 */
import { BoundType } from '../di';

/**
 * Base interface that queries implement
 *
 * @interface Query
 * @extends {BoundType<TReturnValue>}
 * @template TName - query name type
 * @template TReturnValue - return value type
 */
export interface Query<TName extends string, TReturnValue> extends BoundType<TReturnValue> {
  queryName: TName;
}
