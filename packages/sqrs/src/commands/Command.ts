/**
 * Base interface that commands implement
 *
 * @export
 * @interface Command
 * @template T - type of command
 */
export interface Command<T extends string = string> {
  type: T;
}
