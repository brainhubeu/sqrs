import util from 'util';
import { depId } from '@brainhubeu/sqrs';
import chalk from 'chalk';

export const loggerId = depId<Logger>('Logger');

export interface Logger {
  debug (...args: any[]): void;
  info (...args: any[]): void;
  error (...args: any[]): void;
}

export default class ConsoleLogger implements Logger {
  debug (...args: any[]) {
    const formatted = this.format(...args);
    console.debug(chalk.yellow.italic(formatted));
  }

  info (...args: any[]) {
    const formatted = this.format(...args);
    console.info(formatted);
  }

  error (...args: any[]) {
    const formatted = this.format(...args);
    console.error(chalk.bold.red(formatted));
  }

  private format (...args: any[]) {
    return util.format.apply(null, args as any);
  }
}
