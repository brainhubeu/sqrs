/**
 * Base interface that events implement
 *
 * @export
 * @interface Event
 * @template T - type of event
 */
export interface Event<T extends string = string> {
  type: T;
}
