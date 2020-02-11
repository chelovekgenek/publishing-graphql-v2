import { HttpModule } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';

import { OriginConfig } from 'config';

export const injectHttpModule = (configPath: string) =>
  HttpModule.registerAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService): AxiosRequestConfig => {
      const config = configService.get<OriginConfig>(configPath);
      return {
        timeout: 4000,
        validateStatus: (status: number) => status >= 200 && status <= 302,
        baseURL: config.host,
      };
    },
  });
