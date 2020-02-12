import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules/app.module';
import { LoggerInterceptor } from 'shared';
import { HttpModuleFilter } from 'shared/facades/http-module.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalFilters(new HttpModuleFilter());

  await app.listen(3000);
}
bootstrap();
