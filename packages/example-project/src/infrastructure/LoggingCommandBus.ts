import {
  CommandBus,
  DefaultCommandBus,
  CommandResult,
  Dependencies,
  Command,
  commandHandlerProviderId,
  CommandHandlerProvider,
  CommandValidatorProvider,
  commandValidatorProviderId
} from 'sqrs';
import { Logger, loggerId } from './Logger';

export default class LoggingCommandBus implements CommandBus<CommandResult> {
  static dependencies: Dependencies<typeof LoggingCommandBus> = [
    loggerId,
    commandHandlerProviderId,
    commandValidatorProviderId
  ];

  private defaultCommandBus: DefaultCommandBus;

  constructor (
    private readonly logger: Logger,
    commandHandlerProvider: CommandHandlerProvider,
    commandValidatorProvider: CommandValidatorProvider
  ) {
    this.defaultCommandBus = new DefaultCommandBus(commandHandlerProvider, commandValidatorProvider);
  }

  async dispatch (command: Command) {
    try {
      this.logger.debug(`CommandBus - ${command.type} - executing command`);
      this.logger.debug(command);
      const result = await this.defaultCommandBus.dispatch(command);

      return result;
    } catch (error) {
      this.logger.error(`CommandBus - ${command.type} - handler failed`);
      this.logger.error(error);
      throw error;
    }
  }
}
