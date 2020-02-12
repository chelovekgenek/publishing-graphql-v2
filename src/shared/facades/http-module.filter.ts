import { Catch, ServiceUnavailableException, Logger } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { HttpModuleException } from './http-module.interface';

@Catch()
export class HttpModuleFilter implements GqlExceptionFilter {
  private readonly logger: Logger = new Logger(HttpModuleFilter.name);
  catch(exception: HttpModuleException) {
    this.logger.error(exception);
    if (exception.code === 'ENOTFOUND') {
      return new ServiceUnavailableException();
    }
    return exception;
  }
}
