import { depId } from '../dependencies';

describe('dependencies', () => {
  describe('depId', () => {
    it('should create a unique Symbol for provided id.', () => {
      const id1 = depId('test');
      const id2 = depId('test');

      expect(typeof id1).toBe('symbol');
      expect(id1).not.toEqual(id2);
    });

    it('should use existing Symbol for provided id when reusue flag is passed.', () => {
      const id1 = depId('test', true);
      const id2 = depId('test', true);

      expect(id1).toEqual(id2);
    });
  });
});
