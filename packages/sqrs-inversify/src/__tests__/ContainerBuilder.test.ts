import { Container } from 'inversify';
import { depId, Dependencies, commandHandlerId, eventHandlerId, queryHandlerId } from '@brainhubeu/sqrs';
import { ContainerBuilder } from '../ContainerBuilder';

describe('ContainerBuilder', () => {
  const dummyId = depId<Dummy>('Dummy');
  class Dummy {
    static dependencies: Dependencies<typeof Dummy> = [];
  }

  describe('registerType', () => {
    it('should register a type with specified dependencies.', () => {
      const container = new Container();
      const builder = new ContainerBuilder(container);

      const testTypeId = depId<TestType>('TestType');
      class TestType {
        static dependencies: Dependencies<typeof TestType> = [
          dummyId
        ];

        constructor (public readonly dummy: Dummy) {
        }
      }

      builder.registerType(dummyId, Dummy);
      builder.registerType(testTypeId, TestType);

      const testType = container.get<TestType>(testTypeId);

      expect(testType.dummy).toBeInstanceOf(Dummy);
    });
  });

  describe('registerCommandHandler', () => {
    it('should register the handler under correct symbol.', () => {
      const container = new Container();
      const builder = new ContainerBuilder(container);

      class TestCommandHandler {
        static type = 'test';
        static dependencies: Dependencies<typeof TestCommandHandler> = [
          dummyId
        ];

        constructor (public readonly dummy: Dummy) {}
      }

      builder.registerType(dummyId, Dummy);
      builder.registerCommandHandler(TestCommandHandler);

      const handlerId = commandHandlerId('test');
      const handler = container.get<TestCommandHandler>(handlerId);

      expect(handler).toBeInstanceOf(TestCommandHandler);
      expect(handler.dummy).toBeInstanceOf(Dummy);
    });
  });

  describe('registerEventHandler', () => {
    it('should register the handler under correct symbol.', () => {
      const container = new Container();
      const builder = new ContainerBuilder(container);

      class TestEventHandler {
        static type = 'test';
        static dependencies: Dependencies<typeof TestEventHandler> = [
          dummyId
        ];

        constructor (public readonly dummy: Dummy) {}
      }

      builder.registerType(dummyId, Dummy);
      builder.registerEventHandler(TestEventHandler);

      const handlerId = eventHandlerId('test');
      const handler = container.get<TestEventHandler>(handlerId);

      expect(handler).toBeInstanceOf(TestEventHandler);
      expect(handler.dummy).toBeInstanceOf(Dummy);
    });

    it('should register the handler under all handled types.', () => {
      const container = new Container();
      const builder = new ContainerBuilder(container);

      class TestEventHandler {
        static type = [
          'test-1',
          'test-2'
        ];
        static dependencies: Dependencies<typeof TestEventHandler> = [
          dummyId
        ];

        constructor (public readonly dummy: Dummy) {}
      }

      builder.registerType(dummyId, Dummy);
      builder.registerEventHandler(TestEventHandler);

      const test1handlerId = eventHandlerId('test-1');
      const test1Handler = container.get<TestEventHandler>(test1handlerId);

      const test2handlerId = eventHandlerId('test-2');
      const test2Handler = container.get<TestEventHandler>(test2handlerId);

      expect(test1Handler).toBeInstanceOf(TestEventHandler);
      expect(test2Handler).toBeInstanceOf(TestEventHandler);
    });
  });

  describe('registerQueryHandler', () => {
    it('should register the handler under correct symbol', () => {
      const container = new Container();
      const builder = new ContainerBuilder(container);

      class TestQueryHandler {
        static queryName = 'test';
        static dependencies: Dependencies<typeof TestQueryHandler> = [
          dummyId
        ];

        constructor (public readonly dummy: Dummy) {}
      }

      builder.registerType(dummyId, Dummy);
      builder.registerQueryHandler(TestQueryHandler);

      const handlerId = queryHandlerId('test');
      const handler = container.get<TestQueryHandler>(handlerId);

      expect(handler).toBeInstanceOf(TestQueryHandler);
      expect(handler.dummy).toBeInstanceOf(Dummy);
    });
  });
});
