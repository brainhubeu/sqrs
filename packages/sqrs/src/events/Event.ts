/**
 * @module sqrs
 */
/**
 * Base interface that events implement
 *
 * @interface Event
 * @template T - type of event
 */
export interface Event<T extends string = string> {
  type: T;
}
