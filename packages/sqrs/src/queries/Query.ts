import { BoundType } from '../di';

export interface Query<TName extends string, TReturnValue> extends BoundType<TReturnValue> {
  queryName: TName;
}
