import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private logger: Logger = new Logger();

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.setContext(ctx.getClass().name);
    const args = ctx.getArgByIndex(3);
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        this.logger.log(`${args.fieldName} ...${Date.now() - now}ms`);
      }),
    );
  }
}
