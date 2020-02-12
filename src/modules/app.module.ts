import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import configuration from 'config';

import { MenuModule } from './menu';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: true,
      path: '/',
    }),
    MenuModule,
  ],
})
export class AppModule {}
