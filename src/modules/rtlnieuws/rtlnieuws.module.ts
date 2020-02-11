import { Module } from '@nestjs/common';

import { injectHttpModule } from 'shared/inject-http-module';

import { RtlNieuwsFacade } from './rtlnieuws.facade';
import { RtlNieuwsService } from './rtlnieuws.service';

@Module({
  imports: [injectHttpModule('origin.rtlnieuws')],
  providers: [RtlNieuwsFacade, RtlNieuwsService],
  exports: [RtlNieuwsService],
})
export class RtlNieuwsModule {}
