import { Container } from '../../di';
import { commandValidatorId } from '../CommandValidator';
import { containerCommandValidatorProviderFactory } from '../CommandValidatorProvider';

describe('CommandValidatorProvider', () => {
  describe('containerCommandValidatorProviderFactory', () => {
    it('should get command validator by id from container', () => {
      const container: jest.Mocked<Container> = {
        get: jest.fn(),
        getAll: jest.fn(),
        isBound: jest.fn()
      };
      const commandType = 'test';
      const commandValidator = jest.fn();
      container.get.mockImplementation(
        (id: Symbol) => id === commandValidatorId(commandType) ? commandValidator : undefined
      );
      container.isBound.mockImplementation(
        (id: Symbol) => id === commandValidatorId(commandType)
      );
      const provider = containerCommandValidatorProviderFactory(container);
      const handler = provider(commandType);

      expect(handler).toEqual(commandValidator);
    });
  });
});
